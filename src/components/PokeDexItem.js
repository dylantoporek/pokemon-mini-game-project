import React, {useState} from "react";
import PokemonDetails from "./PokemonDetails";


function PokeDexItem({specificPoke, togDetails, setTogDetails, setSpecificPoke, poke, newFavorite}) {
    

    function handlePokeClick(){

        if (specificPoke) {
            setTogDetails(false)
            setSpecificPoke(null)
        } else {
            setTogDetails(true)
            setSpecificPoke(poke)
        }
        
    }
    

    const pokemonDisplay = 
    <div 
        onClick={handlePokeClick}>
        <p id='poke-name'>{poke.name}</p>
        <img src={poke.image}/>
    </div>


    return (
        <div id='poke-item'>
            {pokemonDisplay}
        </div>
    )
}
export default PokeDexItem