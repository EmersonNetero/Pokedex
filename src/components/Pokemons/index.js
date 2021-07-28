import React from 'react';

import Pokemon from '../Pokemon';

import './style.css';

function Pokemons({pokemons}) {
    return (
        <div className="pokemons-container">
            {pokemons.map((pokemon) => <Pokemon key={pokemon.name} pokemon={pokemon} />)}
        </div>
    )
}

export default Pokemons;