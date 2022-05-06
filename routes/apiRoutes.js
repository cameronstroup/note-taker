let router = require("express").Router();
const { response } = require("express");
let store = require("../db/store");
// const store = require("../db/store");
router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});
router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => {
      res.json(note);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
