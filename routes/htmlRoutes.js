let router = require("express").Router();
const store = require("../db/store");
router.get("/notes", (req, res) => {
  res.json(data);
});

// let data = require("../db/db.json");
// let fs = require("fs");
// const { error } = require("console");

// router.get("/api/notes", (req, res) => {
//   res.json(data);
// });

// router.post("/api/notes", (req, res) => {
//   data.push(req.body);
//   fs.writeFile("./db/db.json", JSON.stringify(data), (err) => {
//     if (err) throw err;
//   });
//   res.send("Data added");

//   console.log(data);
// });
// module.exports = router;
