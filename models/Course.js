const mongoose = require("mongoose");

// CHANGE instructorID to required, 
// => student[] isn't required since students may not join the course 
const Course = mongoose.model(
	"Course",

	new mongoose.Schema({
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			enum: ["private", "concert"],
			default: "private"
		},
		instructorID: {
			type: mongoose.Schema.Types.ObjectId,
			required: false,
		},
		students: {
			type: [mongoose.Schema.Types.ObjectId],
			required: false,
		},
		time: {
			type: String,
			required: true
		},
		repeating: {
			type: Boolean,
			default: false
		},
	})
);

module.exports = Course;