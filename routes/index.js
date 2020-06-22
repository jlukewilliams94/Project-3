const router = require("express").Router();
const db = require("../models");

router.get("/api/post", (req, res) => {
    db.Post.find({})
      .then(dbTransaction => {
        return res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  