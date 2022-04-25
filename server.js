const express = require("express");
const app = express();
const PORT = process.env.PORT || 3003;
const htmlRoutes = require("./routes/htmlRoutes.js");
const apiRoutes = require("./routes/apiRoutes");
app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log("`Port is runnin on ${PORT}`  ");
});
