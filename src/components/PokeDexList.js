import React from "react";
import PokeDexItem from "./PokeDexItem";

function PokeDexList({dataArr, filter, newFavorite}) {
    
    const pokeDisplay = () => {
        return pokeFilter().map((poke) => {
            return <PokeDexItem key={poke.name} poke={poke} newFavorite={newFavorite}/>
    
    })}

    const pokeFilter = () => dataArr.filter((poke) => {
        return poke.name.toLowerCase().startsWith(filter.toLowerCase())
     })

    return (
        <div id='listcontainer'>
            {pokeDisplay()}
        </div>
    )
}

export default PokeDexList