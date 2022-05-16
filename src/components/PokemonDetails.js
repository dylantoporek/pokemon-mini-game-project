import React from 'react'

function PokemonDetails({poke, setSpecificPoke, addToFavorite, user}){
   
function handleAddToFavorites(){
    if (user !== 'guest'){
        addToFavorite(poke)
    }
    if (user === 'guest'){
        alert('you must be logged in to use this feature')
    }
    
}

    const details = 
    <div id='pokemon-details-container'>
        <button id='close-details' onClick={() => setSpecificPoke(null)}>X</button>
        <p id='pokemon-details-name'>{poke.name.toUpperCase()}</p>
        <div id='side-by-side-details'>
        <img id='official-img' src={poke.official_image} />
        <div id='pokemon-stats-container'>
            <p>HP: {poke.hp}</p>
            <p>Attack: {poke.attack}</p>
            <p>Defense: {poke.defense}</p>
            <p>Special Attack: {poke.special_attack}</p>
            <p>Special Defense: {poke.special_defense}</p>
            <p>Speed: {poke.speed}</p>
        </div>
        </div>
        
        <button id='add-to-fav' onClick={handleAddToFavorites}>Add to Fav</button>
    </div>
    return (
        <div id='pokemon-details-fixed'>
            {details}
        </div>
    )
}

export default PokemonDetails