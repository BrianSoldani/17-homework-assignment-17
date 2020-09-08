const { Schema, model } = require("mongoose");

const ExerciseSchema = new Schema({
  type: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    enum: ["resistance", "cardio"]
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  duration: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  distance: {
    type: Number,
  }
});

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: true,
    default: Date.now()
  },
  exercises: [ExerciseSchema]
},
  {
    toJSON: { virtuals: true },
    versionKey: false
  }
);


WorkoutSchema.virtual('totalDuration').get(function () {
  return this.exercises.reduce((sum, current) => sum + current.duration, 0);
});

const Workout = model("Workout", WorkoutSchema);
Workout.syncIndexes();
module.exports = Workout;