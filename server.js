const express = require('express');
const app = express();

const pokemon = require('./models/pokemon.js');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
  res.render('Index', { pokemon: pokemon });
});

app.get('/pokemon/:id', (req, res) => {
  const id = req.params.id;
  res.render('Show', { pokemon: pokemon[id] });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
