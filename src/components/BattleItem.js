import React from "react";

function BattleItem({poke}){
    return (
        <div>
            <img id='poke-battle-display' src={poke.image} alt=""/>
        </div>
    )
}

export default BattleItem