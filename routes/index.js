const router = require("express").Router();
const db = require("../models");

router.get("/api/post", (req, res) => {
  db.breweryPost.find({})
    .then(dbTransaction => {
      return res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
router.get("/api/post/:id", (req, res) => {
  db.beerPost.find({ brewery_id: req.params.id })
    .then(dbTransaction => {
      return res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
router.post("/api/post/:id", (req, res) => {
  db.beerPost.findByIdAndUpdate(
    req.params.id,
    {
      $push: {price: req.body.price, quantity: req.body.quantity}
    }
  )
    .then(dbTransaction => {
      res.status(200).json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router