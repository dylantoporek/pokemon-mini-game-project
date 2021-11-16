import React, {useState} from "react";
import BattleForm from "./BattleForm";
import BattleItem from "./BattleItem";
import arena from '../images/arena.png'

function Battle({dataArr}) {
    const [ani, setAni] = useState(false)
    const [playerPoke, setPlayerPoke] = useState([])
    const [cpu, setCpu] = useState([])
    const [playerScore, setPlayerScore] = useState(0)
    const [cpuScore, setCpuScore] = useState(0)

    function playerPokeSearch(obj){
        setPlayerPoke(obj)
    }

    function getOpponent(obj){
        setCpu(obj)
    }

    const playerDisplay = playerPoke.map((poke)=>{
        if(poke.name){
            return <BattleItem key={poke.name} poke={poke} />
        } else{
            return null
        }
    })

    const cpuDisplay = cpu.map((poke) => {
        if(poke.name){
            return <BattleItem key={poke.name} poke={poke} />
        } else{
            return null
        }
    })

    const typeChart = {
        normal: ['fighting'],
        fire: ['water', 'rock', 'ground'],
        water: ['electric', 'grass'],
        electric: ['ground'],
        grass: ['fire', 'ice', 'poison', 'flying', 'bug'],
        ice: ['fire', 'fighting', 'rock', 'steel'],
        fighting: ['flying', 'psychic', 'fairy'],
        poison: ['ground', 'psychic'],
        ground: ['water', 'ice', 'grass'],
        flying: ['electric', 'ice', 'rock'],
        psychic: ['dark', 'bug', 'ghost'],
        bug: ['fire', 'flying', 'rock'],
        rock: ['water', 'grass', 'fighting', 'ground', 'steel'],
        ghost: ['dark'],
        dragon: ['fairy', 'ice'],
        dark: ['fighting', 'bug', 'fairy'],
        steel: ['fire', 'fighting', 'ground'],
        fairy: ['poison', 'steel']
    }

    function calculateWinner(){
        winnerByType()
    }

    function checkScore(){
        const winningScore = 5
        if (playerScore >= winningScore){
            alert('Congratulations, you won! Play again?')
            setPlayerPoke([])
            setCpu([])
            setPlayerScore(0)
            setCpuScore(0)
        }
        if (cpuScore >= winningScore){
            alert ('You lose. Try again!')
            setPlayerPoke([])
            setCpu([])
            setPlayerScore(0)
            setCpuScore(0)
        }
    }


    function winnerByType(){
        if(!playerPoke[0] || !cpu[0]){
            return alert('There must be two pokemon to battle.')
        }

        let playerType = playerPoke[0].types[0].type.name
        let playerTypeArr = typeChart[`${playerType}`]
        let cpuType =cpu[0].types[0].type.name
        let cpuTypeArr = typeChart[`${cpuType}`]
        let playerWins
        let cpuWins

        if (playerWins = cpuTypeArr.includes(playerType)){
         alert(`You won! ${playerType} beats ${cpuType}.`)
         setPlayerScore(playerScore + 1)
         setCpu([])
        } if (cpuWins = playerTypeArr.includes(cpuType)){
            alert(`You lost! ${cpuType} beats ${playerType}.`)
            setCpuScore(cpuScore + 1)
            setPlayerPoke([])
        } if (cpuWins === playerWins){
            alert('No winner by type. It comes down to strength...')
            winnerByAttack()
        }
    }

    function winnerByAttack(){
        let playerPokeName = playerPoke[0].name.toUpperCase()
        let cpuPokeName = cpu[0].name.toUpperCase()
        let playerAtkAvg = (playerPoke[0].stats[1].base_stat + playerPoke[0].stats[3].base_stat)/2
        let cpuAtkAvg = (cpu[0].stats[1].base_stat + cpu[0].stats[3].base_stat)/2

        if(playerAtkAvg > cpuAtkAvg){
            alert(`You won! ${playerPokeName} is stronger than ${cpuPokeName}.`)
            setPlayerScore(playerScore + 1)
            setCpu([])
        } if (cpuAtkAvg > playerAtkAvg){
            alert(`You lost! ${cpuPokeName} is stronger than ${playerPokeName}.`)
            setCpuScore(cpuScore + 1)
            setPlayerPoke([])
        }
    }

    checkScore()

    return (
        <div>
            <div style={{
                position: 'absolute',
                left: 560,
                paddingTop: 10,
                width:75,
                height: 50,
                fontSize: 30,
                borderStyle: "solid",
                borderWidth: 5,
                textAlign: 'center',
                zIndex: 99,
                top: 225,
                backgroundColor: 'white'
                }}>
                {playerScore}
            </div>
            <div style={{
                position: 'absolute',
                left: 810,
                paddingTop: 10,
                width:75,
                height: 50,
                fontSize: 30,
                borderStyle: "solid",
                borderWidth: 5,
                textAlign: 'center',
                zIndex: 99,
                top: 225,
                backgroundColor: 'white'
                }}>
                {cpuScore}
            </div>
           
            <BattleForm 
                dataArr={dataArr} 
                playerPokeSearch={playerPokeSearch} 
                getOpponent={getOpponent}
            />
            
            <button style={{
                position: 'relative',
                height: 50,
                width: 100,
                top: -30,
                left: 670,
                borderRadius: '20%',
                zIndex: 99,
                backgroundColor: 'black',
                WebkitTextFillColor: 'white',
                fontFamily: "avenirnext-heavy",
                fontSize: 25
            }} onClick={calculateWinner}>Battle!</button>

            <div style={{
                position: 'relative',
                top: 150,
                left: 220,
                width: 1000,
                height: 500,
                backgroundImage: `url('${arena}')`
                }}>
                <div style={{
                    position: 'absolute',
                    transform: "scaleX(-1)",
                    top: 80,
                    width: 200,
                    height: 200,
                    left: 160,
                    textAlign: 'center',
                    zIndex: 99
                    }}>
                    {playerDisplay}
                </div>
                <div style={{
                    position: 'absolute',
                    top: 80,
                    width: 200,
                    height: 200,
                    left: 640,
                    textAlign: 'center',
                    zIndex: 99
                    }}>
                    {cpuDisplay}
                </div>
            </div>
        </div>
    )
}

export default Battle