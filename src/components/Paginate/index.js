import React from 'react';
import axios from 'axios';

import "./style.css"

function Paginate({pokemons, setPokemons}) {

    const loadPokemons = async (url = null) => {
		const {data} = await axios.get(url)
		setPokemons(data);
	}

	const handleNextButton = () => {
		loadPokemons(pokemons.next)
	}

	const handleBackButton = () => {
		if (pokemons.previous) loadPokemons(pokemons.previous);
	}

    return (
        <div className="paginate">
          <button className="button btn-voltar" onClick={handleBackButton}>Voltar</button>
          <button className="button btn-proximo" onClick={handleNextButton}>Próximo</button>
        </div>
    )
}
export default Paginate;
