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
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  }
});

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: true,
  },
  exercises: [ExerciseSchema]
},
  {
    toJSON: { virtuals: true }
  }
);


WorkoutSchema.virtual('totalDuration').get(function() {
  return this.exercises.reduce((sum, current) => sum + current.duration, 0);
});

WorkoutSchema.virtual('totalDuration').get(function() {
  return this.exercises.reduce((sum, current) => sum + current.duration, 0);
});

const Workout = model("Workout", WorkoutSchema);

module.exports = Workout;