import React, {Component} from 'react'
import Card from "../../components/Course/Card";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../assets/img/dummyimg.png";
import SideBar from '../../components/General/Sidebar'

// TODO implement similar to all courses
class MyCourses extends Component  {
	initialState = {
		courses: "",
	};


	constructor(props) {
		super(props);
		this.state = this.initialState;
		this.fetchUserInfo = this.fetchUserInfo.bind(this);
		this.displayCourse = this.displayCourse.bind(this);
	}


	componentDidMount = () => {
		this.fetchUserInfo();
	};

	displayCourse = (courses) => {
		if(courses.length === 0){
			return (
				<h1>No Created Courses</h1>
			)
		}
		return courses?.length > 0 && courses.map((course, index) => (
			<div key={index} className="col-md-4">
				<Card courseID={course._id} imgsrc={img1} title={course.name} par={course.type} />
			</div>
		));
	};

	fetchUserInfo = () => {
  
		//let courseId =this.state.courseID;
		if (localStorage.getItem("ijam-user-token")) {
		  let token = localStorage.getItem("ijam-user-token");
		  console.log(token);
		  let config = {
			headers: {
			  "x-access-token": token,
			},
		  };
		  axios
			.get("/api/users/token", config) // the proxy i created is set to our local host
			.then((response) => {
			  let myCourses = response.data.createdCourses;
			  this.setState({courses: myCourses})
			})
			.catch(() => {
			  alert("Error retreiveing Data");
			});
		
	  };
	};

	




	render() {


		return (
			
			
				
			<div>
			<SideBar />
			<h3 className="h22">Created Courses</h3>
			<div className="content">
				<div className="container-fluid d-flex justify-content-center">
					<div className="row">
						<div className="courses">
							{this.displayCourse(this.state.courses)}
						</div>
					</div>
				</div>
			</div>
			</div>
		);
	}
}

export default MyCourses







