import React from "react";

function BattleItem({poke}){
    return (
        <div>
            <img id='poke-battle-display' src={poke.sprites.front_default} alt=""/>
        </div>
    )
}

export default BattleItem