import React from "react";

function PokeDexForm({filterDisplay, filter}){

    function handleChange(event){
        filterDisplay(event.target.value)
    }
    return (
        <div>
            <input style={{
                position: 'relative',
                marginLeft: 15
            }} type="text" placeholder="Search PokeDex" value={filter} onChange={handleChange}></input>
        </div>
    )
}

export default PokeDexForm
