import React from "react";
import { NavLink } from "react-router-dom";
import battlelogo from '../images/battlelogo.png';
import pokedexlogo from '../images/pokedexlogo.png';
import tracklogo2 from '../images/tracklogo2.png';
import favlogo from '../images/favlogo.png';
import './App.css';

function NavBar() {
    return (
        <div id='nav'>
            <NavLink id='linkPokedex' to="/">
                PokeDex <img id='pokedexlogo' src={pokedexlogo}/>
            </NavLink>
            <NavLink id='linkTrack' to="/track">
                Track <img id='tracklogo' src={tracklogo2}/>
            </NavLink>
            <NavLink id='linkArena' to="/arena">
                Arena <img id='arenalogo' src={battlelogo}/>
            </NavLink>
            <NavLink id='linkFav' to="/favorites">
                Favorites <img id='favlogo' src={favlogo}/>
            </NavLink>
        </div>
    )
}

export default NavBar