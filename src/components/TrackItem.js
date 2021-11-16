import React from "react";

function TrackItem({poke, ani}){
    
    function speedFinder(){
        return (500/poke.stats[5].base_stat) 
    }
    return (
        <div style={{
            animation: ani ? `sprint ${speedFinder()}s forwards` : "",
            }}>
            <img style={{
                transform: "scaleX(-1)",
                position: 'relative',
                zIndex: 10000000
            }} src={poke.sprites.front_default} alt="" />
        </div>
    )
}

export default TrackItem