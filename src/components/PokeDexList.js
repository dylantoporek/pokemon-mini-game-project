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
        <div style={{
            backgroundColor: "#3b4cca",
            position: "relative",
            top: 20,
            paddingLeft: 15,
            paddingTop: 10,
            display: "flex",
            flexWrap: "wrap",
            height: 600,
            width: "100%",
            overflow: "auto"
            }}>
            {pokeDisplay()}
        </div>
    )
}

export default PokeDexList