const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: String,
  img: String,
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
