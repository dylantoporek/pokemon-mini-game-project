import React from "react";

function TrackItem({poke, ani}){
    
    function speedFinder(){
        return (500/poke.stats[5].base_stat) 
    }
    return (
        <div style={{
            animation: ani ? `sprint ${speedFinder()}s forwards` : "",
            }}>
            <img id='poke-track-display' src={poke.sprites.front_default} alt="" />
        </div>
    )
}

export default TrackItem