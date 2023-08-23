const React = require('react');

const Index = ({ pokemonList }) => {
  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <img src={pokemon.img} alt={pokemon.name} />
          </li>
        ))}
      </ul>
      <a href="/pokemon/new">Add New Pokémon</a>
    </div>
  );
};

module.exports = Index;
