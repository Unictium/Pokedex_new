import React from 'react';
import PokemonCard from './components/PokemonCard'; 

function App() {
  return (
    <div> <h1>coucou</h1>
      <PokemonCard
        name="Bulbasaur"
        description="Bulbasaur is a grass-type Pokémon."
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      />
    </div>
  );
}

export default App;