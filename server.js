const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
const PORT = process.env.PORT || 3003;
const htmlRoutes = require("./routes/htmlRoutes.js");
const apiRoutes = require("./routes/apiRoutes");
app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log("`API server is now on port ${PORT}`  ");
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
