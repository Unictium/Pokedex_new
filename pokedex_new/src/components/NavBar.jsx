import React from 'react';

function NavBar({ pokemonList, onPokemonSelect }) {
  return (
    <div className="nav-bar">
      {pokemonList.map((pokemon, index) => (
        <button
          key={index}
          onClick={() => onPokemonSelect(index)} 
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;