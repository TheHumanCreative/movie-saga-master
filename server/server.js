const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------Route Includes--------- **/
const moviesRouter = require('./routes/home.router') // go to movies table in DB and grab 
// const genresRouter = require('./routes/details.router') // go to genres table in DB and grab
// const detailRouter = require('./routes/details.router') //


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/home', moviesRouter); // movie list page and router
// app.use('/details', genresRouter); // details page and router
// app.use('/edit', editRouter) // edit page and router 
/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});