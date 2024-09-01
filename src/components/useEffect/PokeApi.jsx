import React, { useEffect, useState } from 'react'

function PokeApi() {   
    const [pokemonsNames, setPokemonsNames] = useState([]);
    const [message, setMessage] = useState(true);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then((response) => response.json())
            .then((data) => {
                setPokemonsNames(data.results);
                setMessage(false);
            })
            .catch((error) => {
                console.error('There was a error with fetch', error);
                setMessage(false);
            });
    }, []);

    if (message) {
        return <p>Loading Pokemons...</p>;
    }

  return (
    <div>
        <h1>POKEMON API</h1>
        <ul>
            {pokemonsNames.map((pokemon, index) => (
                <li key={index}>
                    {pokemon.name} - {pokemon.url}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PokeApi