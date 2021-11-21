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
        </div>
    )
}

export default NavBar