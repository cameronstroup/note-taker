const express = require("express");
const app = express();
const htmlRoutes = require("./routes/htmlRoutes.js");
const apiRoutes = require("./routes/apiRoutes.js");
const PORT = process.env.PORT || 3003;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server is now on port ${PORT}`);
});
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });
