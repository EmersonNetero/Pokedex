import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Pokemons from './components/Pokemons'
import Header from './components/Header';
import Paginate from './components/Paginate'

import './styles/generic/reset.css';
import './styles/settings/colors.css';
import './App.css';


function App() {
	
	const [pokemons, setPokemons] = useState({
		results: [
			{
				name: "bulbasaur",
				url: "https://pokeapi.co/api/v2/pokemon/1/"
			},
			{
				name: "ivysaur",
				url: "https://pokeapi.co/api/v2/pokemon/2/"
			}
		]
	})

	const loadPokemons = async (url = null) => {
		const {data} = await axios.get(url)
		setPokemons(data);
	}
	
	useEffect(() => {
		loadPokemons("http://pokeapi.co/api/v2/pokemon/")
	}, [])

	return (
		<>
			<Header>
				Pokedex
			</Header>
			<Pokemons pokemons={pokemons.results}/>
			<Paginate pokemons={pokemons} setPokemons={setPokemons}/>
		</>
	);
}

export default App;