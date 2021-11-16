import React, {useEffect, useState} from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Race from './Race';
import Battle from './Battle';
import FavList from './FavList';
import shift from '../images/shift.gif'

function App() {
  const [dataArr, setDataArr] = useState([])
  const [favorites, setFavorites] = useState([])
  
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=898&offset=0")
    .then(res => res.json())
    .then(data => {
      data.results.forEach((result) => {
        fetchPokeData(result.url)
      })
    })

    fetch("http://localhost:4000/fav")
        .then(res => res.json())
        .then((data) => {
            setFavorites(data)
        })
  }, [])
  
  
  function handleDeleteItem(deletedItem){
    console.log(deletedItem)
    const updatedFavs = favorites.filter((fav) => fav.id !== deletedItem.id);
    setFavorites(updatedFavs);

    fetch(`http://localhost:4000/fav/${deletedItem.id}`, {
      method: 'DELETE',
    })
    .then((res) => res.json())
    .then(console.log)
  }

  
  function fetchPokeData(url){
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      setDataArr((prevDataArr)=>[...prevDataArr, data])
    })
  }

  if (dataArr.length > 300){
    return <div style={{
      position: "fixed",
      right: 0,
      left: 0,
      }}>
      <NavBar />
      <Routes>
        <Route path="/track" element={<Race dataArr={dataArr}/>}></Route>
        <Route path="/arena" element={<Battle dataArr={dataArr} />}></Route>
        <Route path='/favorites' element={<FavList favorites={favorites} onDeleteItem={handleDeleteItem}  />}></Route>
        <Route exact path="/" element={<Home dataArr={dataArr} setFavorites={setFavorites} favorites={favorites} />}></Route>
        </Routes>
    </div>
  } else {
  return <div style={{
    position: "absolute",
    display: "flex",
    top: 225,
    left: 500,
    fontSize: 50,
    }}>
    <h3>Loading</h3>
    <img src={shift}/>
    </div>
  }
}

export default App;
