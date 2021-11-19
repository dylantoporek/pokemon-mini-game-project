import React from "react";

function PokeDexForm({filterDisplay, filter}){

    function handleChange(event){
        filterDisplay(event.target.value)
    }
    return (
        <div>
            <input id='pokedexsearch'
                type="text" 
                placeholder="Search PokeDex" 
                value={filter} 
                onChange={handleChange}>
            </input>
        </div>
    )
}

export default PokeDexForm
