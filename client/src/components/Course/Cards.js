import React from "react";
import Card from "./Card";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../assets/img/dummyimg.png";

// TODO Refactor to take courses as props and map them to Cards
class Cards extends React.Component {
	initialState = {
		courses: "",
	};


	constructor(props) {
		super(props);
		this.state = this.initialState;
		this.getAllCourses = this.getAllCourses.bind(this);
	}


	componentDidMount = () => {
		this.getAllCourses();
	};

	displayCourse = (courses) => {
		return courses?.length > 0 && courses.map((course, index) => (
			<div key={index} className="col-md-4">
				<Card courseID={course._id} imgsrc={img1} title={course.name} par={course.type} />
			</div>
		));
	};


	getAllCourses = () => {
		axios
			.get("/api/Courses/") // the proxy i created is set to our local host
			.then((response) => {
				const data = response.data;
				this.setState({ courses: data, repeating: data.repeating });

			})
			.catch(() => {
				alert("Error retreiveing Data");
			});
	};

	render() {


		return (
			<div className="content">
				<div className="container-fluid d-flex justify-content-center">
					<div className="row">
						<div className="courses">
							{this.displayCourse(this.state.courses)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Cards;
