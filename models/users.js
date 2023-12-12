const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name required "]
  },
  email: {
    type: String,
    required: [true, "email required "]
  },
  password: {
    type: String,
    required: [true, "password required "]
  }
});
const Blog = mongoose.model('Query', blogSchema);
module.exports = Blog