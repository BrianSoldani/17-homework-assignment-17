const express = require("express");
const router = express.Router();

const { Workout } = require("../models");

router.get("/workouts", (req, res) => {
  Workout.find({})
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      console.error(err);
      res.status(404).end();
    });
});
router.post("/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((workouts) => {
      res.json(workouts);
    })
    .catch(err => {
      console.error(err);
      res.status(404).end()
    });
  console.log(req.body);
}); // add
router.put("/workouts/:id", (req, res) => {
  console.log(req.body);
  res.end();
}); //edit
router.get("/workouts/range", (req, res) => {

});

module.exports = router;



// app.post("/submit", ({ body }, res) => {
//   db.Book.create(body)
//     .then(({ _id }) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/books", (req, res) => {
//   db.Book.find({})
//     .then(dbBook => {
//       res.json(dbBook);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/library", (req, res) => {
//   db.Library.find({})
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/populated", (req, res) => {
//   db.Library.find({})
//     .populate("books")
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });