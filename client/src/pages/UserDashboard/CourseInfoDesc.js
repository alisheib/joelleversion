import React from "react";
import axios from "axios";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import SideBar from "../../components/General/Sidebar";

import "../../styles/courseInfo.css";

class CourseInfoDesc extends Component {

	initialState = {
		courseID: "",
		name: "",
		type: "",
		students: [],
		description: "",
		time: "",
		repeating: false,
		courses: "",
		redirect: "",
		instructor: {
			instructorID: "",
			instructorName: "",
			instructorDob: "",
			instructorMobile: "",
			instructorUsername: "",
			instructorEmail: "",
			instructorLocation: "",
			instructorCreatedCourses: "",
			instructorAboutMe: ""
		},
		redirectType: ""
	};


	constructor(props) {
		super(props);
		this.state = this.initialState;
		this.getInstructorInfo = this.getInstructorInfo.bind(this);
	}

	componentDidMount = () => {
		axios
			.get(`/api/Courses/${this.props.match.params.id}`)
			.then(({ data }) => {
				let instructor = { ...this.state.instructor, instructorID: data.instructorID };
				this.setState(prevState => ({
					...prevState,
					courses: data,
					courseID: data._id,
					name: data.name,
					type: data.type,
					time: data.time,
					students: data.students,
					instructor: instructor,
					repeating: data.repeating,
					description: data.description,
				}));

				this.getInstructorInfo();
			})
			.catch(() => {
				alert("Error retreiveing Data");
			});

	};

	getInstructorInfo = async () => {

		const instructorID = this.state.instructor.instructorID;
		axios
			.get(`/api/users/fetch/${instructorID}`)
			.then(({ data }) => {
				console.log(data);
				this.setState(prevState => ({
					...prevState,
					instructor: {
						instructorID: instructorID,
						instructorName: data.name,
						instructorLocation: data.country,
						instructorMobile: data.phone,
						instructorDob: data.dateOfBirth,
						instructorUsername: data.username,
						instructorEmail: data.email,
						instructorCreatedCourses: data.createdCourses
					}
				}));
			})
			.catch(() => {
				alert("Error retreiveing User Data");
			});
	};


	render() {
		const { instructorName, instructorUsername, instructorAboutMe, instructorMobile, instructorEmail, instructorLocation } = this.state.instructor;
		const { courseID, redirectType, name, type, time } = this.state;

		return (
			<div>
				<SideBar />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossOrigin="anonymous" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossOrigin="anonymous" />
				<main className="content">
					<div className="container-fluid p-0">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-xl-4">
									<div className="card-box text-center">
										<img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="rounded-circle avatar-xl img-thumbnail" alt="profile" />
										<h4 className="mb-0">{instructorName}</h4>
										<p className="text-muted">{instructorUsername}</p>
										<button type="button" className="btn btn-danger btn-xs waves-effect mb-2 waves-light">Email </button>
										<div className="text-left mt-3">
											<h4 className="font-13 text-uppercase">About Me :</h4>
											<p className="text-muted font-13 mb-3"> {instructorAboutMe}</p>
											<p className="text-muted mb-2 font-13">
												<strong>Full Name :</strong>{" "}<span className="ml-2">{instructorName}</span>
											</p>
											<p className="text-muted mb-2 font-13">
												<strong>Mobile :</strong><span className="ml-2">{instructorMobile}</span>
											</p>
											<p className="text-muted mb-2 font-13">
												<strong>Email :</strong>{" "}<span className="ml-2 ">{instructorEmail}</span>
											</p>
											<p className="text-muted mb-1 font-13">
												<strong>Location :</strong>{" "}<span className="ml-2">{instructorLocation}</span>
											</p>
										</div>
										<ul className="social-list list-inline mt-3 mb-0">
											<li className="list-inline-item">
												<Link to="#" className="social-list-item border-purple text-purple"> <i className="fab fa-facebook" /></Link>
											</li>
											<li className="list-inline-item">
												<Link to="#" className="social-list-item border-danger text-danger"> <i className="fab fa-google-plus" /></Link>
											</li>
											<li className="list-inline-item">
												<Link to="#" className="social-list-item border-info text-info"> <i className="fab fa-twitter" /></Link>
											</li>
											<li className="list-inline-item">
												<Link to="#" className="social-list-item border-secondary text-secondary"> <i className="fab fa-instagram" /></Link>
											</li>
											<li className="list-inline-item">
												<Link to="#" className="social-list-item border-secondary text-secondary"> <i className="fab fa-linkedin" /></Link>
											</li>
										</ul>
									</div>{" "}
									{/* end card-box */}
								</div>{" "}
								{/* end col*/}
								<div className="col-lg-8 col-xl-8">
									<div className="card-box">
										<ul className="nav nav-pills navtab-bg">
											<li className="nav-item">
												<Link to="/Course/CourseInfoDesc"
													data-toggle="tab" aria-expanded="true" className="nav-link ml-0 active">
													<i className="mdi mdi-face-profile mr-1" /> About the course
                        </Link>
											</li>

											<li className="nav-item">
												<Link to={`/Course/CourseInfoSet/${courseID}`}
													data-toggle="tab" aria-expanded="false" className="nav-link ">
													<i className="mdi mdi-settings-outline mr-1" />Settings
													</Link>
											</li>
										</ul>
										<div className="tab-content">
											<div className="tab-pane show active" id="about-me">
												<h5 className="mt-0 mb-1">{name}</h5>
												<p>Type: Classical</p>
												<h5 className="mt-0 mb-1">Get to know the course</h5>
												<p>This is a piano course.</p>
												<h5 className="mt-0 mb-1">Date and time</h5>
												<p>{time}</p>
												<h5 className="mt-0 mb-1">Cost</h5>
												<p>This course costs 20 credits</p>
												<h5 className="mt-0 mb-1">Type</h5>
												<p>{type}</p>

												{redirectType === "instructorRedirect" && (
													<div className="table-responsive">
														<h5 className="mb-3 mt-4 text-uppercase">
															<i className="mdi mdi-cards-variant mr-1" />
                              Enrolled Students
                            </h5>

														<table className="table table-borderless mb-0">
															<thead className="thead-light">
																<tr>
																	<th>#</th>
																	<th>Student Name</th>
																	<th>Email Student</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>1</td>
																	<td>Abed Dandan</td>
																	<td>
																		{" "}
																		<button type="button" className="btn btn-success btn-xs waves-effect mb-2 waves-light">Email</button>
																	</td>
																</tr>
																<tr>
																	<td>2</td>
																	<td>Walid Al Kassar</td>
																	<td>
																		{" "}
																		<button type="button" className="btn btn-success btn-xs waves-effect mb-2 waves-light"> Email</button>
																	</td>
																</tr>
																<tr>
																	<td>3</td>
																	<td>Ahmad Shehadeh</td>
																	<td>
																		{" "}
																		<button type="button" className="btn btn-success btn-xs waves-effect mb-2 waves-light">Email</button>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												)}
											</div>

											{/* end timeline content*/}
										</div>{" "}
										{/* end tab-content */}
									</div>{" "}
									{/* end card-box*/}
								</div>{" "}
								{/* end col */}
							</div>
						</div>
					</div>
				</main>
			</div>
		);
	}
}

export default CourseInfoDesc;
