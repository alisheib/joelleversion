const mongoose = require("mongoose");

const User = mongoose.model(
  "User",

  new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    email:{ 
      type: String,
      required: true,
    },
    password: { 
      type: String,
      required: true,
    },
    dateOfBirth:{ 
      type: String,
      required: false,
    },
    enrolledCourses: { 
      type: Array,
      required: false,
    },
	  createdCourses: { 
      type: Array,
      required: false,
    },
  })
);

module.exports = User;
