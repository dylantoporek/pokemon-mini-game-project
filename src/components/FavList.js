import React, {useState, useEffect} from "react";


function FavList({favorites, onDeleteItem}) {

    const favDisplay = () => favorites.map((fav) => {
        return <div id='fav-container' style={{
            backgroundColor: 'white',
            borderStyle: 'solid',
            borderColor: '#ffcb05',
            borderWidth: 6,
            borderRadius: 5,
            width: 150,
            height: 215,
            margin: 5,
            }} key={fav.id}>

            <p style={{
                fontFamily: "sans-serif",
                fontSize: 12
            }}>{fav.name}</p>

            <img style={{
                position: 'relative',
                maxWidth: '120%',
                maxHeight: '120%',
                top: 10,
                zIndex: 99
            }} src={fav.img} />

            <div style={{
                position: 'relative',
                backgroundColor: '#3d7dca',
                borderRadius: "100%",
                width: 100,
                height: 40,
                zIndex: 88,
                left: 25,
                top: -40,
            }}></div>

            <button style={{
                position: 'relative',
                top: 0
            }} onClick={() => onDeleteItem(fav)}>Delete</button>
        </div>
    })

    return (
        <div style={{
            position: 'relative',
            left: 120,
            top: 10,
            width: '95%',
            height: '100%',
            textAlign: 'center',
            }}>
           <div style={{
               position: 'relative',
               borderStyle: "solid",
               width: 150,
               height: 50,
               left: 522,
               fontFamily: "avenirnext-heavy",
               fontSize: 25,
               borderRadius: 5
                }}>
                    <p style={{
                        position: 'relative',
                        top: -16
                    }}>Favorites</p>
                </div>
                <div style={{
                    position: "relative",
                    top: 20,
                    display: "flex",
                    flexWrap: "wrap",
                    height: 600,
                    width: "100%",
                    overflow: "auto",
                    }}>
                    {favDisplay()}
                </div>
           
        </div>
    )
}

export default FavList