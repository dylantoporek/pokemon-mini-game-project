import React, {useState} from "react";
import PokeDexItem from "./PokeDexItem";

function PokeDexList({dataArr, filter, newFavorite}) {
    const [togDetails, setTogDetails] = useState(false)
    const [specificPoke, setSpecificPoke] = useState(null)

    const pokeDisplay = () => {
        return pokeFilter().map((poke) => {
            return <PokeDexItem 
                        specificPoke={specificPoke}
                        togDetails={togDetails}
                        setTogDetails={setTogDetails} 
                        setSpecificPoke={setSpecificPoke} 
                        key={poke.name} 
                        poke={poke} 
                        newFavorite={newFavorite}
                        />
    
    })}
   
    const pokeFilter = () => dataArr.filter((poke) => {
        return poke.name.toLowerCase().startsWith(filter.toLowerCase())
     })

    return (
        <div id='list-container'>
            {pokeDisplay()}
        </div>
    )
}

export default PokeDexList