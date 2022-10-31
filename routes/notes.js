const note = require('express').Router();
const fs = require('fs');
let db = require('../db/db.json');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all notes
note.get('/', (req, res) => {
    res.json(db);
});

// POST route for adding a new note
note.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title: title,
            text: text,
            id: uuid(),
        }
        db.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
        (err) ? console.log(err) : console.log(`Note added successfully`)
    });
    };

    res.send('Post called');
});

// DELETE route for removing selected note from page
note.delete('/:id', (req, res) => {
   db = db.filter(note => note.id != req.params.id)
   

   fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
    (err) ? console.log(err) : console.log(`Note removed successfully`)
});
  res.send('Delete called');
});

module.exports = note;
