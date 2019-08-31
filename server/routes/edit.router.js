// const express = require("express");
// const pool = require("../modules/pool");
// const axios = require("axios");

// const router = express.Router();

// // return all favorite images
// router.get('/', (req, res) => {
//   pool.query('SELECT * FROM "movies" && SELECT * FROM "genres";').then((result) => {
//     res.send(result.rows);
//   }).catch((error) => {
//     console.log('Error', error)
//     res.sendStatus(500);
//   });

// });

// // add a new edit to the description
// router.post('/', (req, res) => {
//   let newEdit = req.body;
//   console.log('newEdit', newEdit);

//   let queryText =
//               `INSERT INTO "movies_genres" 
//               VALUES ($1);`;
//   pool.query(queryText, [])
//     .then(results => {
//       res.sendStatus(200);
//     })
//     .catch( error => {
//       console.log('error adding newEdit', error);
//       res.sendStatus(500);
//     })


// });

// // update
// router.put('/:Id', (req, res) => {
//   // req.body should contain a category_id to add to this movie
//   res.sendStatus(200);
// });

// // delete
// router.delete('/:id', (req, res) => {
//   let id = req.params.id
//   let queryText = `DELETE FROM "movies_genres" WHERE "id" = $1`
//   pool.query(queryText, [id])
//     .then(results => {
//     res.sendStatus(204)
//     })
//     .catch(error => {
//       console.log('error removing', error);
//       res.sendStatus(500)
//     })
// });