import React from "react";

function TrackItem({poke, ani}){
    
    function speedFinder(){
        return (500/poke.speed) 
    }
    return (
        <div style={{
            animation: ani ? `sprint ${speedFinder()}s forwards` : "",
            }}>
            <img id='poke-track-display' src={poke.image} alt="" />
        </div>
    )
}

export default TrackItem