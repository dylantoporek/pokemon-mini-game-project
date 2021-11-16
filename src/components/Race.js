import React, {useState} from "react";
import TrackForm from "./TrackForm";
import TrackItem from "./TrackItem";
import track from '../images/track.png'



function Race({dataArr}) {
    const [ani, setAni] = useState(false)
    const [playerPoke, setPlayerPoke] = useState([])
    const [cpu1, setCpu1] = useState({})
    const [cpu2, setCpu2] = useState({})
    const [cpu3, setCpu3] = useState({})
    const [cpu4, setCpu4] = useState({})

    function playerPokeSearch(obj){
        setPlayerPoke(obj)
    }

    function getOpponent1(obj){
        setCpu1(obj)
    }
    
    function getOpponent2(obj){
        setCpu2(obj)
    }
    
    function getOpponent3(obj){
        setCpu3(obj)
    }
        
    function getOpponent4(obj){
        setCpu4(obj)
    }

    
    const playerDisplay = playerPoke.map((poke) => {
       if(poke.name){
        return <TrackItem key={poke.name} poke={poke} ani={ani} />
       } else {
           return null
       }
    })

    const opponents = [cpu1, cpu2, cpu3, cpu4]
    const opponentsDisplay = opponents.map((cpu) => {
      if(cpu.name){
        return <TrackItem key={cpu.name} poke={cpu} ani={ani} />
      } else {
          return null
      } 
    })

    function startRace(){

        if(!playerPoke[0] || !cpu1.name){
            return alert('There must be 5 pokemon to race.')
        }
        const playerSpeed = playerPoke[0].stats[5].base_stat
        const opponentSpeedStats = opponents.map((cpu) => {
           return cpu.stats[5].base_stat
        })

       const racerSpeeds = [playerSpeed, ...opponentSpeedStats]
        setAni(true)
        setTimeout(function (){
            if(Math.max(...racerSpeeds) === playerSpeed){
                alert('You won!')
            } else {
                alert("You lost.")
            }
            setPlayerPoke([])
            setCpu1([])
            setCpu2([])
            setCpu3([])
            setCpu4([])
            setAni(false)
        }, 7000)
        
    }

    return (
        <div>
            <TrackForm
                dataArr={dataArr}
                playerPokeSearch={playerPokeSearch} 
                getOpponent1={getOpponent1} 
                getOpponent2={getOpponent2} 
                getOpponent3={getOpponent3} 
                getOpponent4={getOpponent4} 
            />
            <button style={{
                backgroundColor: 'black',
                WebkitTextFillColor: 'white',
                fontFamily: 'avenirnext-heavy',
                fontSize: 25,
                position: 'relative',
                height: 50,
                width: 100,
                left: 670,
                top: -30,
                borderRadius: '20%',
            }} onClick={startRace}>Race!</button>
            <div style={{
                position:'relative',
                height: 500,
                backgroundImage: `url('${track}')`,
                }}>
                <div style={{
                    position: 'relative',
                    top: -10
                    }}>
                    {playerDisplay}
                    {opponentsDisplay}
                </div>
            </div>
        </div>
    )
}

export default Race