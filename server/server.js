const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------Route Includes--------- **/
const homeRouter = require('./routes/home.Router'); // go to movies table in DB and grab 
const detailsRouter = require('./routes/details.Router'); // go to genres table in DB and grab
// const detailRouter = require('./routes/details.router'); //


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/home', homeRouter); // movie list page and router
app.use('/details', detailsRouter); // details page and router
// app.use('/edit/:id', editRouter) // edit page and router 
/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});