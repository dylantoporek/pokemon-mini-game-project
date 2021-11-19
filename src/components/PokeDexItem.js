import React, {useState} from "react";


function PokeDexItem({poke, newFavorite}) {
    const [togDetails, setTogDetails] = useState(false)

    function showDetails(e){
        setTogDetails(!togDetails)

    }

    function hideDetails(e){
        setTogDetails(!togDetails)
    }

    function addToFav(e){
        const itemData = {
            name: poke.name,
            img: poke.sprites.front_default
        }
        fetch('http://localhost:4000/fav', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemData),
        })
        .then((r) => r.json())
        .then((newFav) => newFavorite(newFav))
        alert(`${poke.name.toUpperCase()} has been added to favorites!`)
        setTogDetails(false)
    }


    if(togDetails){
        let pokeTypeDisplay
        if (poke.types.length === 1){
            pokeTypeDisplay = poke.types[0].type.name.toUpperCase()
        } else {
            pokeTypeDisplay = poke.types[0].type.name.toUpperCase() + "   •   " + poke.types[1].type.name.toUpperCase()
        }
        return(
            <div id='details-container'>
                <div id='details-card'>
                    <button id='hide-details' 
                        onClick={hideDetails}>
                        Close card
                    </button>
                    <img id='details-image' src={poke.sprites.other['official-artwork'].front_default}/>
                    <div id='details-info'>
                        <h2 id='details-name'>
                            {poke.name.toUpperCase()}
                        </h2>
                        <h4 id='details-type'>
                            {pokeTypeDisplay}
                        </h4>
                        <h4 id='details-stats'>
                            Base Stats:
                        </h4>
                        <li className='stats'>
                            HP: {poke.stats[0].base_stat}
                        </li>
                        <li className='stats'>
                            Attack: {poke.stats[1].base_stat}
                        </li>
                        <li className='stats'>
                            Defense: {poke.stats[2].base_stat}
                        </li>
                        <li className='stats'>
                            Special Attack: {poke.stats[3].base_stat}
                        </li>
                        <li className='stats'>
                            Special Defense: {poke.stats[4].base_stat}
                        </li>
                        <li className='stats'>
                            Speed: {poke.stats[5].base_stat}
                        </li>
                        <button id='fav' onClick={addToFav}>
                            Fav
                        </button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div id='poke-item' onClick={showDetails}>
                <img src={poke.sprites.front_default} alt="" />
                <p id='poke-name'>
                    {poke.name}
                </p>
            </div>
        )
    }

    
}

export default PokeDexItem