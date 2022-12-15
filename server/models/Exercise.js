const mongoose = require("mongoose");

const { Schema } = mongoose;

const Bodypart = require("./Bodypart");

const exerciseSchema = new Schema({
  id: {
    type: DataTypes.INTEGER,
    // prevents null values
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  bodypart: [Bodypart.schema],

  difficulty: {
    type: String,
  },
  instructions: {
    type: String,
  },
  weight: {
    type: String,
  },
  bodypart: {
    type: Schema.Types.ObjectId,
    ref: "Bodypart",
    required: true,
  },
  reps: {
    type: String,
  },
  sets: {
    type: String,
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
