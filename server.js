require('dotenv').config();


const express = require('express');
const app = express();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: "));
db.on("close", () => console.log("mongo disconnected"));

// List of Pokémon images
const pokemon = [
    { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur.jpg" },
    { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur.jpg" },
    { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur.jpg" },
    { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander.jpg" },
    { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard.jpg" },
    { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle.jpg" },
    { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle.jpg" }
];


// Set up view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Use middleware
app.use(express.urlencoded({ extended: false }));

// Index Route
app.get('/pokemon', async (req, res) => {
    try {
        const pokemonList = await Pokemon.find();
        res.render('Index', { pokemonList });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Create Route
app.post('/pokemon', async (req, res) => {
    try {
        const { name, img } = req.body;
        const newPokemon = new Pokemon({ name, img });
        await newPokemon.save();
        res.redirect('/pokemon');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error: ' + err.message);
    }
});

// New Route
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

// Show Route
app.get('/pokemon/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id);
        res.render('Show', { pokemon });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
