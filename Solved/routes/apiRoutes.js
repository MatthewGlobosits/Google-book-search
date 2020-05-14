var dotenv = require ("dotenv").config();

const axios = require("axios");
const router = require("express").Router();

// router.get("/recipes", (req, res) => {
//   axios
//     .get("http://www.recipepuppy.com/api/", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });
module.exports = function(app) {
  app.get("/api/books", (req, res) => {
      db.Book.find().then(
          (booksData) => {
              res.json(booksData);
          }
      ).catch(
          (err) => {
              res.json({error: err});
          }
      );
  });
app.post("/search", (req, res) => {
  
  let bookTitle = req.body.title.replace(/\s/g, "+");
  axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.GBOOKS_KEY}`
  ).then(
      (response) => {
          res.json(response.data.items)
      }
  ).catch(
      (err) => {
          res.json({error: error})
      }
  );
});
}
module.exports = router;
