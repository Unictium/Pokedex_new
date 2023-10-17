import React, { useState } from 'react';
import './App.css';
import PokemonCard from './components/PokeCard';
import NavBar from './components/NavBar';

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const currentPokemon = pokemonList[pokemonIndex];

  const handlePokemonChange = (delta) => {
    const newIndex = (pokemonIndex + delta + pokemonList.length) % pokemonList.length;
    setPokemonIndex(newIndex);
  };

  return (
    <div>
      <PokemonCard pokemon={currentPokemon} />
      <NavBar
        onPreviousClick={() => handlePokemonChange(-1)}
        onNextClick={() => handlePokemonChange(1)}
        isPreviousDisabled={pokemonIndex === 0}
        isNextDisabled={pokemonIndex === pokemonList.length - 1}
      />
    </div>
  );
}


export default App;