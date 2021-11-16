import React from "react";
import { NavLink } from "react-router-dom";
import battlelogo from '../images/battlelogo.png'
import pokedexlogo from '../images/pokedexlogo.png'
import tracklogo2 from '../images/tracklogo2.png'
import favlogo from '../images/favlogo.png'

function NavBar() {
    return (
        <div
            style={{
                borderBottom: "2px solid black",
                borderTop: "2px solid black",
                paddingBottom: "10px",
                marginBottom: "12px",
                marginTop: "12px",
                height: 40,
                backgroundColor: "#FF0000"
            }}>
            <NavLink style={{ 
                position: "relative",
                left: 20,
                top: -45,
                marginRight: "80px",
                WebkitTextFillColor: "white",
                fontWeight: "bold",
                fontFamily: "avenirnext-heavy",
                fontSize: 30,
                textDecoration: "none",
                }} to="/">
                PokeDex <img style={{
                position: 'relative',
                maxHeight: '95%',
                maxWidth: '95%',
                top: 7
            }} src={pokedexlogo}/>
            </NavLink>
            <NavLink style={{ 
                left: 60,
                position: "relative",
                marginRight: "80px",
                WebkitTextFillColor: "white",
                fontWeight: "bold",
                fontFamily: "avenirnext-heavy",
                fontSize: 30,
                top: -45,
                textDecoration: "none"
                }} to="/track">
                Track <img style={{
                position: 'relative',
                maxHeight: '200%',
                maxWidth: '200%',
                top: 25,
                left: -40
            }} src={tracklogo2}/>
            </NavLink>
            <NavLink style={{
                position: "relative",
                left: 20,
                marginRight: "120px",
                WebkitTextFillColor: "white",
                fontWeight: "bold",
                fontFamily: "avenirnext-heavy",
                fontSize: 30,
                top: -45,
                textDecoration: "none"
                }} to="/arena">
                Arena <img style={{
                position: 'relative',
                maxHeight: '120%',
                maxWidth: '120%',
                top: 10
            }} src={battlelogo}/>
            </NavLink>
            <NavLink style={{ 
                position: "relative",
                left: 20,
                top: -45,
                marginRight: "10px",
                WebkitTextFillColor: "white",
                fontWeight: "bold",
                fontFamily: "avenirnext-heavy",
                fontSize: 30,
                textDecoration: "none",
                }} to="/favorites">
                Favorites <img style={{
                position: 'relative',
                maxHeight: '90%',
                maxWidth: '90%',
                top: 8
            }} src={favlogo}/>
            </NavLink>
        </div>
    )
}

export default NavBar