const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();



router.get('/', (req, res) => {
  // get all movies
  const queryText = `SELECT * FROM "movies" ORDER BY "title" ASC`
  pool.query(queryText)
    .then((results) => {
      console.log(`successful router.get in home.router`);
      res.send(results.rows);
    })
    .catch((error) => {
      console.log("ERROR in router.get in home.router", error);
      res.sendStatus(500);
    });
});

module.exports = router;