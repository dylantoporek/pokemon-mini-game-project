import React, {useState} from "react";
import PokemonDetails from "./PokemonDetails";


function PokeDexItem({poke, newFavorite}) {
    const [togDetails, setTogDetails] = useState(false)
    const [specificPoke, setSpecificPoke] = useState(null)

    function handlePokeClick(){
        setTogDetails(true)
        setSpecificPoke(poke)
    }
    const pokemonDisplay = 
    <div 
        onClick={handlePokeClick}>
        <p id='poke-name'>{poke.name}</p>
        <img src={poke.image}/>
    </div>

    const pokemonDetails = specificPoke && togDetails ? <PokemonDetails setTogDetails={setTogDetails} poke={specificPoke} /> : null
    return (
        <div id='poke-item'>
            {pokemonDisplay}
            <div>
                {pokemonDetails}
            </div>
        </div>
    )
}
export default PokeDexItem