const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  provider: {
    type: String,
  },
  providerId: {
    type: String,
    unique: true,
  },
  profilePicture: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
