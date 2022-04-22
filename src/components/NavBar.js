import React from "react";
import { NavLink } from "react-router-dom";
import battlelogo from '../images/battlelogo.png';
import pokedexlogo from '../images/pokedexlogo.png';
import tracklogo2 from '../images/tracklogo2.png';
import favlogo from '../images/favlogo.png';
import './App.css';
import {useNavigate} from 'react-router-dom'

function NavBar({user, setUser}) {

    const navigate = useNavigate()
    function handleClick(){
        if (user === 'guest'){
            navigate('/login')
        } else {
            fetch("/api/v1/logout", { method: "DELETE" }).then((r) => {
                if (r.ok) {
                  setUser('guest');
                }
              });
              navigate('/')
        }
    }
    let userButton = user === 'guest' ? <button id='user-button' onClick={handleClick}>Login</button> : <button id='user-button' onClick={handleClick}>Signout</button>
    return (
        <div id='nav'>
            <NavLink id='link-pokedex' to="/">
                PokeDex <img id='pokedex-logo' src={pokedexlogo}/>
            </NavLink>
            <NavLink id='link-track' to="/track">
                Track <img id='track-logo' src={tracklogo2}/>
            </NavLink>
            <NavLink id='link-arena' to="/arena">
                Arena <img id='arena-logo' src={battlelogo}/>
            </NavLink>
            <NavLink id='link-fav' to="/favorites">
                Favorites <img id='fav-logo' src={favlogo}/>
            </NavLink>
            <NavLink id='link-login' to="/login">
                
            </NavLink>
            {userButton}
        </div>
    )
}

export default NavBar