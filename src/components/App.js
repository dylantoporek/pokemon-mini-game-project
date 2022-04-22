import React, {useEffect, useState} from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import PokeDex from './PokeDex';
import Race from './Race';
import Battle from './Battle';
import FavList from './FavList';
import Login from './Login';
import shift from '../images/shift.gif'

function App() {
  const [dataArr, setDataArr] = useState([])
  const [favorites, setFavorites] = useState([])
  const [user, setUser] = useState('guest')

  useEffect(() => {
    fetch("/api/v1/pokemons")
    .then(res => res.json())
    .then(data => setDataArr(data))

    fetch("/api/v1/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else{
        r.json().then((data) => console.log(data))
      }
    });
    
    

    // fetch("http://localhost:4000/fav")
    //     .then(res => res.json())
    //     .then((data) => {
    //         setFavorites(data)
    //     })
  }, [])
  
  
  function handleDeleteItem(deletedItem){
    const updatedFavs = favorites.filter((fav) => fav.id !== deletedItem.id);
    setFavorites(updatedFavs);

    fetch(`http://localhost:4000/fav/${deletedItem.id}`, {
      method: 'DELETE',
    })
    .then((res) => res.json())
    .then(console.log('Item Deleted'))
  }

  
  function fetchPokeData(url){
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      setDataArr((prevDataArr)=>[...prevDataArr, data])
    })
  }

  if (dataArr.length > 300){
    return <div id='app'>
      <NavBar user={user} setUser={setUser} />
      <Routes>

        <Route path="/track" 
          element={<Race dataArr={dataArr} favorites={favorites}/>}>
        </Route>

        {/* <Route path="/arena" 
          element={<Battle dataArr={dataArr} favorites={favorites} />}>
        </Route>

        <Route path='/favorites' 
          element={<FavList favorites={favorites} onDeleteItem={handleDeleteItem}  />}>
        </Route> */}

        <Route exact path="/login" 
          element={<Login onLogin={setUser}/>}>
        </Route>

        <Route exact path="/" 
          element={<PokeDex dataArr={dataArr} setFavorites={setFavorites} favorites={favorites} />}>
        </Route>
        
      </Routes>
    </div>
  } else {
  return <div id='loading'>
    <h3>Loading</h3>
    <img src={shift}/>
    </div>
  }
}

export default App;
