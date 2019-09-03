const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// details
router.get("/:id", (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM "movies" WHERE "id" = $1;`;
  pool
    .query(queryText, [req.params.id])
    .then((results) => {
      res.send(results.rows[0]);
      console.log(results.rows[0]);
      
    })
    .catch((error) => {
      console.log('Error on query', error); // client side
      res.sendStatus(500);
    });
});

// edit description and title of movie
router.put('/update', (req,res) => {
    
    const queryText = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE "id" = $3;`;
    pool
        .query(queryText, [req.body.title, req.body.description, req.body.id])
        .then ((results) => {
            console.log("successful update to movie title / description:");
            console.log(results);  
            res.sendStatus(200);
             
        })
        .catch (error => {
            console.log('error in Updating title PUT', error); // server side
            res.sendStatus(500); 
        })
})

// router.put('/updateDescription', (req,res) => {

//     const queryText = `UPDATE "movies" SET "description" = $1 WHERE "id" = $2;`;
//     pool
//         .query(queryText, [req.body.description, req.body.id])
//         .then((results) => {
//             console.log('successful update to movie description');
//             console.log(results);
//             res.sendStatus(200);
//         })
//         .catch((error) => {
//             console.log('error in Updating description PUT', error); // server side 
//             res.sendStatus(500);
//         })
// })

 // genre details
router.get('/genre/:id', (req,res) => {

    const queryText = `SELECT array_agg("genres".name) FROM "genres" JOIN "movies_genres" ON "genres".id = "movies_genres".genres_id
                        WHERE "movies_genres".movies_id = $1;`;
    pool
        .query(queryText, [req.params.id])
        .then((results) => {
            res.send(results.rows[0]);
            console.log(results.rows[0]);

        })
        .catch((error) => {
            console.log('Error on query', error); // client side
            res.sendStatus(500);
        });
});

module.exports = router;