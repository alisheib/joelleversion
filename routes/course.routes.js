const router = require('express').Router();
const Course = require('../models/Course');


router.get("/", function (req, res) {
	Course.find()
		.exec(function (err, courses) {
			if (err)
				return res.send("error has occured")
			return res.json(courses)
		})
});

router.get("/:id", function (req, res) {
	Course.findOne({
		_id: req.params.id
	}).exec(function (err, course) {
		if (err)
			return res.send("error occured");

		return res.json(course);

	});
});

router.post("/add", function (req, res) {
	const { name, type, instructorID, students, time, repeating } = req.body;
	var newCourse = new Course({
		name, type, instructorID, students, time, repeating: !!repeating
	});

	newCourse.save(function (err, course) {
		if (err) {
			res.status(400).send(err.message)
		} else {
			console.log(course);
			res.status(201).send(course);
		}
	});
});


router.put("/course/:id", async (req, res) => {
	console.log('course');
	try {
		const id = req.params.id;
		const updates = req.body;
		const options = { new: true, useFindAndModify: true };

		let result = await Course.findOneAndUpdate(id, updates, options);

		if (result)
			return res.status(200).send(result);

		return res.status(404).send('no course matching the given id')
	}
	catch (err) {
		res.status(500).send(err.message);
	}
})

router.delete("/course/:id", function (req, res) {
	Course.findOneAndDelete({
		_id: req.params.id
	}, function (err, course) {
		if (err) {
			res.send(err.message);
		} else {
			console.log(course);
			res.status(200).send(course);
		}
	})
});
module.exports = router;