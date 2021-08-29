import React, {useState} from 'react';
import axios from 'axios'

import './style.css'

function Pokemon({pokemon}) {
    const [sprite, setSprite] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png')

    const loadSprite = async () => {
        const s = await axios.get(pokemon.url)
        setSprite(s.data.sprites.front_default)
    }
    loadSprite()
    return (
        <div className="pokemon-container">
            {pokemon.name}
            <img src={sprite} alt="" />
        </div>
    )
}

export default Pokemon

