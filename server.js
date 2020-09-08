const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./routes/htmlRoutes.js"));
app.use("/api", require("./routes/apiRoutes.js"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});