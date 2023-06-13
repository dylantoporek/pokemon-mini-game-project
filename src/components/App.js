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
    
    fetch("/api/v1/user_favorites").then((r) => {
      if (r.ok) {
        r.json().then((data) => setFavorites(data));
      } else{
        r.json().then((data) => console.log(data))
      }
    });

    
  }, [])


  function addToFavorite(obj){
    console.log(obj)
    let newFav = {pokemon_id: obj.id}
    fetch('/api/v1/user_favorites', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({newFav}),
      }).then((r) => {
      if (r.ok) {
        r.json().then((data)=> {
          let newFavoritesArr = [...favorites, data]
          setFavorites(newFavoritesArr)
        })
      } else {
        r.json().catch((data) => console.log(data))
      }
    });
  }
  
  function handleDeleteItem(deletedItem){
    const updatedFavs = favorites.filter((fav) => fav.id !== deletedItem.id);
    setFavorites(updatedFavs);

    fetch(`/api/v1/user_favorites/${deletedItem.id}`, {
      method: 'DELETE',
    })
    .then((res) => {
      if (res.ok) {
        console.log("file deleted")
      } else {
        res.json().then((data)=> console.log(data))
      }
    })
  }

  
  function fetchPokeData(url){
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      setDataArr((prevDataArr)=>[...prevDataArr, data])
    })
  }

  console.log(favorites)

  if (dataArr.length > 300){
    return <div id='app'>
      <NavBar user={user} setUser={setUser} />
      <Routes>

        <Route path="/track" 
          element={<Race user={user} dataArr={dataArr} favorites={favorites}/>}>
        </Route>

        <Route path="/arena" 
          element={<Battle user={user} dataArr={dataArr} favorites={favorites} />}>
        </Route>

        <Route path='/favorites' 
          element={<FavList user={user} favorites={favorites} onDeleteItem={handleDeleteItem}  />}>
        </Route>

        <Route exact path="/login" 
          element={<Login onLogin={setUser}/>}>
        </Route>

        <Route exact path="/" 
          element={<PokeDex user={user} dataArr={dataArr} setFavorites={setFavorites} favorites={favorites} addToFavorite={addToFavorite} />}>
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
