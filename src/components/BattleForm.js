import React, {useState} from "react";

function BattleForm({dataArr, playerPokeSearch, getOpponent, favorites}){
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
        getOpponent([dataArr[Math.floor(Math.random()*898)]])
    }

    function randomPlayerPoke(){
        playerPokeSearch([dataArr[Math.floor(Math.random()*898)]])
    }

    function randomFav(){
        if(favorites.length > 0){
            let randomFav = favorites[Math.floor(Math.random() * (favorites.length))]
            let findRandomFav = dataArr.filter((poke) => {
                return poke.name === randomFav.pokemon.name
            })
            playerPokeSearch([findRandomFav[0]])
        } else {
            alert('You must have at least one favorite to use this button!')
        }
    }

    return (
        <div>

            <form id='battle-searchbar' onSubmit={handleSubmit}>
                <label>
                    <input 
                        type="text" 
                        placeholder="choose your pokemon" 
                        value={pokeName} 
                        onChange={handleChange} 
                    />
                </label>
                <input id='battle-searchbar-submit' type="submit" value="Search"/>
            </form>

            <button id='random-cpu' onClick={handleClick}>
                Generate CPU
            </button>

            <button id='random-player' onClick={randomPlayerPoke}>
                Random Pokemon
            </button>

            <button id='random-fav' onClick={randomFav}>
                Random Favorite
            </button>

        </div>
    )
}

export default BattleForm