const express = require("express");
const pool = require("../modules/pool");
const axios = require("axios");

const router = express.Router();



router.get("/:id", (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM movies WHERE "id" = $1 ORDER BY name ASC`;
  pool
    .query(queryText, [req.params.id])
    .then(results => {
      res.send(results.rows[0]);
      console.log(results.rows[0]);
      
    })
    .catch(error => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});







router.get("/genre/:id", (req,res) => {

    const queryText = `SELECT "genres".name FROM "genres" JOIN "movie_genres" ON "genres".id = "movie_genres".genre_id
                        WHERE "movie_genres".movie_id = $1;`;
    pool
        .query(queryText, [req.params.id])
        .then(results => {
            res.send(results.rows);
            console.log(result.rows);

        })
        .catch(error => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

// router.put("/", (req, res) => {
//   let updatedFavorite = req.body;
//   console.log("new category id", updatedFavorite);

//   let queryText = `UPDATE "favorites" SET "category_id" = $1 WHERE "id" = $2`;
//   pool
//     .query(queryText, [updatedFavorite.categoryID, updatedFavorite.gifID])
//     .then(results => {
//       res.sendStatus(200);
//     })
//     .catch(error => {
//       console.log("error adding new ID", error);
//       res.sendStatus(500);
//     });
// });