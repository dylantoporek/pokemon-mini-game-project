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
            <div style={{
                paddingTop: 20,
                paddingBottom: 20,
                position:"relative",
                display: "flex",
                justifyContent: "center",
                left: 20,
                marginRight: 20,
                height: '100%',
                width: '95%',
                zIndex: 99
                }}>
                <div style={{
                    position: "relative",
                    paddingTop: 20,
                    display: "flex",
                    backgroundColor: 'white',
                    justifyContent: 'flex-start',
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderRadius: 5,
                    width: "45%",
                    }}>
                    <button style={{
                        position: "absolute",
                        top: 10,
                        left: 15,
                        height: 20,
                        width: 80
                    }} onClick={hideDetails}>Close card</button>
                    <img src={poke.sprites.other['official-artwork'].front_default} style={{
                        paddingRight: 20,
                        paddingLeft: 10,
                        paddingTop: 50,
                        maxWidth: '60%',
                        maxHeight: '60%',
                    }} />
                    <div style={{
                        paddingTop: 50,
                        paddingRight: 10,
                        maxHeight: '50%',
                        maxWidth: '50%',
                        }}>
                        <h2 style={{
                            textAlign:"center",
                        }}>{poke.name.toUpperCase()}</h2>
                        <h4 style={{
                            textAlign:"center"
                        }}>{pokeTypeDisplay}</h4>
                        <h4 style={{
                            paddingTop: 30
                        }}>Base Stats:</h4>
                        <li style={{
                        position: 'relative',
                        }}>HP: {poke.stats[0].base_stat}</li>
                        <li style={{
                            position: 'relative'
                        }}>Attack: {poke.stats[1].base_stat}</li>
                        <li style={{
                            position: "relative",
                        }}>Defense: {poke.stats[2].base_stat}</li>
                        <li style={{
                            position: "relative",
                        }}>Special Attack: {poke.stats[3].base_stat}</li>
                        <li style={{
                        position: "relative",
                        }}>Special Defense: {poke.stats[4].base_stat}</li>
                        <li style={{
                            position: "relative",
                        }}>Speed: {poke.stats[5].base_stat}</li>
                        <button onClick={addToFav} style={{
                            position: "relative",
                            top: 150,
                            left: -100,
                        }}>Fav</button>
                    </div>
                </div>
            </div>
        )
    }else {
        return (
            <div style={{
                borderStyle: "solid",
                borderRadius: 5,
                margin: 3,
                borderWidth: 1,
                backgroundColor: 'white',
                width: 100,
                height: 150
            }} onClick={showDetails}>
                <img src={poke.sprites.front_default} alt="" />
                <p style={{
                    textAlign: "center",
                    fontSize: 12
                }}>{poke.name}</p>
            </div>
        )
    }

    
}

export default PokeDexItem