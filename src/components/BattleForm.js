import React, {useState} from "react";

function BattleForm({dataArr, playerPokeSearch, getOpponent}){
    const[pokeName, setPokeName] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        const playerPokeMatch = dataArr.filter((poke) => {
            return poke.name.toLowerCase() === pokeName.toLowerCase()
        })
        playerPokeSearch(playerPokeMatch)
        setPokeName("")
    }
    
    function handleChange(event){
        setPokeName(event.target.value)
    }

    function handleClick(event){
        getOpponent([dataArr[Math.floor(Math.random()*898)]])
    }

    function randomPlayerPoke(){
        playerPokeSearch([dataArr[Math.floor(Math.random()*898)]])
    }

    return (
        <div>

            <form style={{
                position: 'relative',
                marginLeft: 15
                }} id="form" onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder="choose your pokemon" value={pokeName} onChange={handleChange} />
                </label>
                <input style={{
                    borderRadius: '20%',
                }} type="submit" value="Search"/>
            </form>

            <button style={{
                position: 'relative',
                top: 20,
                left: 1000,
                borderRadius: '20%',
            }} onClick={handleClick}>Generate CPU</button>

            <button style={{
                position: 'relative',
                top: 20,
                left: 240,
                borderRadius: '20%',
            }} onClick={randomPlayerPoke}>Random Pokemon</button>

        </div>
    )
}

export default BattleForm