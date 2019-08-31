const express = require("express");
const pool = require("../modules/pool");
// const axios = require("axios");

const router = express.Router();



router.get('/', (req, res) => {
  // get all movies
  let queryText = `SELECT * FROM "movies" ORDER BY "title" ASC`
  pool.query(queryText)
    .then(result => {
      console.log(`successful router.get in home.router`);
      res.send(result.rows);
    })
    .catch(error => {
      console.log("ERROR in router.get in home.router", error);
      res.sendStatus(500);
    });
});

module.exports = router;