const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  { useNewUrlParser: true }
);

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// app.post("/submit", ({ body }, res) => {
//   User.create(body)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

app.use("/", require("./routes/htmlRoutes.js"));
app.use("/api", require("./routes/apiRoutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


// const mongoose = require("mongoose");

// const Example = require("./exampleModel.js");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });

// const data = {
//   array: ["item1", "item2", "item3"],
//   boolean: false,
//   string:
//     "\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
//   number: 42
// };

// Example.create(data)
//   .then(dbExample => {
//     console.log(dbExample);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });
