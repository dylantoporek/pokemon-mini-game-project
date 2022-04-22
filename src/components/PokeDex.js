import React, {useState} from "react";
import PokeDexList from "./PokeDexList";
import PokeDexForm from "./PokeDexForm";
import PokemonDetails from "./PokemonDetails";

function PokeDex({dataArr, setFavorites, favorites}) {
    const [filter, setFilter] = useState("")
    const [togDetails, setTogDetails] = useState(false)
    const [specificPoke, setSpecificPoke] = useState(null)

    function newFavorite(newFav){
        setFavorites([...favorites, newFav])
    }


    function filterDisplay(string){
        setFilter(string)
    }
    const pokemonDetails = specificPoke ? <PokemonDetails setSpecificPoke={setSpecificPoke} poke={specificPoke} /> : null

    return (
        <div>
            <PokeDexForm filterDisplay={filterDisplay} filter={filter} />
            <PokeDexList 
                dataArr={dataArr} 
                filter={filter} 
                newFavorite={newFavorite}
                togDetails={togDetails}
                setTogDetails={setTogDetails}
                specificPoke={specificPoke}
                setSpecificPoke={setSpecificPoke}/>
                {pokemonDetails}
        </div>
    )
}

export default PokeDex