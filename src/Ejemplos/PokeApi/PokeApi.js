import { useState, useEffect } from "react"


export const PokeApi = () => {

    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(200)

    const handleAnterior = () => { id > 1 && setId( id - 1 ) }
    const handleSiguiente = () => { id < 898 && setId( id + 1 ) }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then( res => res.json() )
            .then( data => setPokemon(data) ) 
    }, [id])

    return (
        <div className="container my-5">
            <h2>Poke API</h2>
            <hr/>

            { pokemon &&
                <div>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.front_default}/>
                </div>
            }

            <hr/>
            <button onClick={handleAnterior} disabled={id === 1} className="btn btn-outline-primary mx-3">Anterior</button>
            <button onClick={handleSiguiente} disabled={id === 898} className="btn btn-primary">Siguiente</button>
        </div>
    )
}