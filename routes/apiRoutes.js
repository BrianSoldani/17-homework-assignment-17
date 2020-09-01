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
  Workout.create({}).then(newWorkout => {
    res.json(newWorkout);
    })
    .catch(err => {
      console.error(err);
      res.status(404).end()
    });
  console.log(req.body);
}); // add
router.put("/workouts/:id", (req, res) => {
  console.log(req.params.id);
  Workout.findOneAndUpdate({ _id: params.id },
    { $push: { excercises: body } },
    { upsert: true, useFindandModify: false },
    updatedWorkout => {
      res.json(updatedWorkout);
    })
}); //edit
router.get("/workouts/range", (req, res) => {
  Workout.find({})
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      console.error(err);
      res.status(404).end();
    });
});

module.exports = router;