import React, {useState} from "react";
import PokeDexList from "./PokeDexList";
import PokeDexForm from "./PokeDexForm";

function Home({dataArr, setFavorites, favorites}) {
    const [filter, setFilter] = useState("")
    

    function newFavorite(newFav){
        setFavorites([...favorites, newFav])
    }


    function filterDisplay(string){
        setFilter(string)
    }

    return (
        <div>
            <PokeDexForm filterDisplay={filterDisplay} filter={filter} />
            <PokeDexList dataArr={dataArr} filter={filter} newFavorite={newFavorite} />
        </div>
    )
}

export default Home