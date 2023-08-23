const React = require('react');

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <h1>See All The Pokemon!</h1>
        <ul>
          {pokemon.map((poke, index) => (
            <li key={index}>
              <a href={`/pokemon/${index}`}>{poke.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
