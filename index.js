// Build a simple web page where I could share data among different parts of the page. 

// The page would have three main sections:
    // - A box with a list of all existing pokémon
    // - A box with a list of all captured pokémon
    // - A box with input to add new pokémon to the list

// And each box would have the following behavior or actions:
    // - For each pokémon in the first box, I can capture them and send to the second box
    // - For each pokémon in the second box, I can release them and send to the first box
    // - Create pokémon by filling in the input and sending them to the first box


    import React, { useState } from 'react';

    const PokemonsList = () => {
      const [pokemons] = useState([
        { id: 1, name: 'Bulbasaur' },
        { id: 2, name: 'Charmander' },
        { id: 3, name: 'Squirtle' }
      ]);
    
      return (
        <div className="pokemons-list">
          <h2>Pokemons List</h2>
          
          {pokemons.map((pokemon) =>
            <div key={`${pokemon.id}-${pokemon.name}`}>
              <p>{pokemon.id}</p>
              <p>{pokemon.name}</p>
            </div>)}
        </div>
      )
    }
    
    export default PokemonsList;