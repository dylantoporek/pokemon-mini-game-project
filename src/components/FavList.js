import React from "react";


function FavList({favorites, onDeleteItem}) {

    const favDisplay = () => favorites.map((fav) => {
        return <div id='fav-container' key={fav.id}>

            <p id='fav-name'>
                {fav.name}
            </p>

            <img id='poke-fav-img' src={fav.img} />

            <div id='img-base'></div>

            <button id='delete-fav' onClick={() => onDeleteItem(fav)}>Delete</button>
        </div>
    })

    return (
        <div id='favorites-page-title-container'>

           <div id='fav-title-display'>
                <p id='fav-title'>
                    Favorites
                </p>
            </div>
                
            <div id='fav-poke-display'>
                {favDisplay()}
            </div> 
           
        </div>
    )
}

export default FavList