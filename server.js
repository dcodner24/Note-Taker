const express = require('express');
const path = require('path');
const api = require('./routes');


const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for doing the json things
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api)


app.use(express.static('public'));

// Get route for displaying notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Get route to catch all other addresses
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`);
})

