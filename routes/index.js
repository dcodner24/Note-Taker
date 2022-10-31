const express = require('express');
const app = express();
// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');



app.use('/notes', notesRouter);


module.exports = app;