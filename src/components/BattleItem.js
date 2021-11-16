import React from "react";

function BattleItem({poke}){
    return (
        <div>
            <img style={{
                width: '75%',
                height: '75%'
            }} src={poke.sprites.front_default} alt=""/>
        </div>
    )
}

export default BattleItem