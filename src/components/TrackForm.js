import React, {useState} from "react";

function TrackForm({playerPokeSearch, dataArr, getOpponent1, getOpponent2, getOpponent3, getOpponent4, favorites, user}) {
    const[pokeName, setPokeName] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        const playerPokeMatch = dataArr.filter((poke) => {
            return poke.name.toLowerCase() === pokeName.toLowerCase()
        })
        playerPokeSearch(playerPokeMatch)
        setPokeName("")
    }
    
    function handleChange(event){
        setPokeName(event.target.value)
    }

    function handleClick(){
        getOpponent1(dataArr[Math.floor(Math.random()*898)])
        getOpponent2(dataArr[Math.floor(Math.random()*898)])
        getOpponent3(dataArr[Math.floor(Math.random()*898)])
        getOpponent4(dataArr[Math.floor(Math.random()*898)])
    }

    function randomPlayerPoke(){
        playerPokeSearch([dataArr[Math.floor(Math.random()*898)]])
    }

    function randomFavPoke(){
        if (user !== 'guest'){
            if(favorites.length > 0){
                let randomFav = favorites[Math.floor(Math.random() * (favorites.length))]
                let findRandomFav = dataArr.filter((poke) => {
                    return poke.name === randomFav.pokemon.name
                })
                playerPokeSearch([findRandomFav[0]])
            } else {
                alert('You must have at least one favorite to use this button!')
            } 
        } else {
            alert('you must be logged in to use this feature')
        }
         
    }

    return (
        <div>
            <form id='track-searchbar' onSubmit={handleSubmit}>
                <label>
                    <input 
                        type="text"
                        placeholder="choose your pokemon" 
                        value={pokeName} 
                        onChange={handleChange} 
                    />
                </label>
                <input id='track-submit' 
                    type="submit" 
                    value="Search"
                />
            </form>
            <button id='opponents' onClick={handleClick}>Generate Opponents</button>
            <button id='random-poke' onClick={randomPlayerPoke}>Random Pokemon</button>
            <button id='random-fav' onClick={randomFavPoke}>Random Favorite</button>
        </div>
    )
}

export default TrackForm