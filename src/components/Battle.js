import React, {useState} from "react";
import BattleForm from "./BattleForm";
import BattleItem from "./BattleItem";
import arena from '../images/arena.png'

function Battle({dataArr, favorites, user}) {
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
        console.log(playerPoke[0])
        console.log(cpu[0])

        let playerType = playerPoke[0].type_one
        let playerType2 = playerPoke[0].type_two ? playerPoke[0].type_two : null
        let playerTypeArr = typeChart[`${playerType}`]
        let cpuType = cpu[0].type_one
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
        let playerAtkAvg = (playerPoke[0].attack + playerPoke[0].special_attack)/2
        let cpuAtkAvg = (cpu[0].attack + cpu[0].special_attack)/2

        if(playerAtkAvg > cpuAtkAvg){
            alert(`You won! ${playerPokeName} is stronger than ${cpuPokeName}.`)
            setPlayerScore(playerScore + 1)
            setCpu([])
        } if (cpuAtkAvg > playerAtkAvg){
            alert(`You lost! ${cpuPokeName} is stronger than ${playerPokeName}.`)
            setCpuScore(cpuScore + 1)
            setPlayerPoke([])
        } if (cpuAtkAvg === playerAtkAvg) {
            alert('What are the odds? Both Pokemon were knocked out!')
            setPlayerPoke([])
            setCpu([])
        }
    }

    checkScore()

    return (
        <div>

            <div id='player-score'>
                {playerScore}
            </div>

            <div id='cpu-score'>
                {cpuScore}
            </div>
           
            <BattleForm
                user={user}
                favorites={favorites}
                dataArr={dataArr} 
                playerPokeSearch={playerPokeSearch} 
                getOpponent={getOpponent}
            />
            
            <button id='battle' onClick={calculateWinner}>
                Battle!
            </button>

            <div id='arena-container' style={{backgroundImage: `url('${arena}')`}}>
                
                <div id='player-poke'>
                    {playerDisplay}
                </div>

                <div id='cpu-poke'>
                    {cpuDisplay}
                </div>
                
            </div>
        </div>
    )
}

export default Battle