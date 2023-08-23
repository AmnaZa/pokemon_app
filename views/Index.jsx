import React from 'react';

class Index extends React.Component {
  render() {
    const { pokemonList } = this.props;

    if (!pokemonList) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Pokémon Index Page</h1>
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Index; 