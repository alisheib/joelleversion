import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../../components/General/Sidebar";
import axios from "axios";
import { Component } from "react";
import "../../styles/courseInfo.css";
import mapTimeZones from "../../components/timeZone";
class CourseInfoSet extends Component {
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
		}
	};

	componentDidMount = () => {
		axios
			.get(`/api/Courses/${this.props.match.params.id}`) // the proxy i created is set to our local host
			.then(({ data }) => {

				this.setState(prevState => ({
					...prevState,
					courses: data,
					courseID: data._id,
					name: data.name,
					type: data.type,
					time: data.time,
					students: data.students,
					instructor: { instructorID: data.instructorID },
					repeating: data.repeating,
					description: data.description,
				}));

				this.getInstructorInfo();
			})
			.catch(() => {
				alert("Error retreiveing Data");
			});
	};

	getInstructorInfo = () => {
		const { instructorID } = this.state.instructor;
		axios
			.get(`/api/users/fetch/${instructorID}`) // the proxy i created is set to our local host
			.then(({ data }) => {
				this.setState(prevState => ({
					...prevState,
					instructor: {
						instructorName: data.name,
						instructorLocation: data.country,
						instructorMobile: data.phone,
						instructorDob: data.dateOfBirth,
						instructorUsername: data.username,
						instructorEmail: data.email,
						instructorCreatedCourses: data.createdCourses,
					}
				}));
			})
			.catch(() => {
				alert("Error retreiveing User Data");
			});
	};

	constructor(props) {
		super(props);
		this.state = this.initialState;
		this.getInstructorInfo = this.getInstructorInfo.bind(this);
	}

	render() {

		const { instructorName, instructorUsername, instructorAboutMe, instructorMobile, instructorEmail, instructorLocation } = this.state;
		const { courseID } = this.state;
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
										<button type="button" className="btn btn-danger btn-xs waves-effect mb-2 waves-light">Email</button>
										<div className="text-left mt-3">
											<h4 className="font-13 text-uppercase">About Me :</h4>
											<p className="text-muted font-13 mb-3">{instructorAboutMe}</p>
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
												<strong>Location :</strong>{" "} <span className="ml-2">{instructorLocation}</span>
											</p>
										</div>
										<ul className="social-list list-inline mt-3 mb-0">
											<li className="list-inline-item">
												<Link to="#" className="social-list-item border-purple text-purple"><i className="fab fa-facebook" /> </Link>
											</li>
											<li className="list-inline-item">
												<Link to="#" className="social-list-item border-danger text-danger"><i className="fab fa-google-plus" /> </Link>
											</li>
											<li className="list-inline-item">
												<Link to="#" className="social-list-item border-info text-info"><i className="fab fa-twitter" /></Link>
											</li>
											<li className="list-inline-item">
												<Link to="#" className="social-list-item border-secondary text-secondary"><i className="fab fa-instagram" /></Link>
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
												<Link to={`/Course/CourseInfoDesc/${courseID}`}
													data-toggle="tab" aria-expanded="false" className="nav-link "> <i className="mdi mdi-face-profile mr-1" /> About the course
                        </Link>
											</li>
											<li className="nav-item">
												<Link to={`/Course/CourseInfoSet/${courseID}`}
													data-toggle="tab" aria-expanded="true" className="nav-link ml-0 active">
													<i className="mdi mdi-settings-outline mr-1" />Settings
                        </Link>
											</li>
										</ul>
										<div className="tab-pane" id="settings">
											<form>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label htmlFor="firstname">Course Title</label>
															<input type="text" className="form-control" id="coursetitle" placeholder="Change course title" />
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label htmlFor="firstname">Course Genre</label>
															<input type="text" className="form-control" id="coursegenre" placeholder="Change course genre" />
														</div>
													</div>
												</div>{" "}
												{/* end row */}
												<div className="row">
													<div className="col-12">
														<div className="form-group">
															<label htmlFor="userbio">Description</label>
															<textarea className="form-control" id="coursedescription" rows={4} placeholder="Change course description..." defaultValue={""} />
														</div>
													</div>{" "}
													{/* end col */}
												</div>{" "}
												{/* end row */}
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label>Thumbnail</label>
															<input type="file" id="file" />
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label>Change Date</label>
															<br />
															<input type="date" id="date" />
														</div>
													</div>{" "}
													{/* end col */}
												</div>{" "}
												{/* end row */}
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label>Change time zone</label>
															<select style={{ fontFamily: '"PT Sans", sans-serif', fontSize: "0.9rem", display: "block", padding: "0.5rem 1rem", width: "100%", }}>
																{mapTimeZones()}
															</select>
														</div>
													</div>
												</div>{" "}
												{/* end row */}
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label htmlFor="firstname">Change start time</label>
															<input type="time" defaultValue="13:00"
																style={{ fontFamily: '"PT Sans", sans-serif', fontSize: "1.0rem", display: "block", padding: "0.5rem 1rem", }} />
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label htmlFor="firstname">Change end time</label>
															<input type="time" defaultValue="13:00"
																style={{ fontFamily: '"PT Sans", sans-serif', fontSize: "1.0rem", display: "block", padding: "0.5rem 1rem" }} />
														</div>
													</div>
												</div>{" "}
												{/* end row */}
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label htmlFor="firstname">Course Cost</label>
															<input
																type="text"
																className="form-control"
																id="coursecost"
																placeholder="Change course cost"
															/>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label htmlFor="firstname">Course Type</label>
															<div className="form-check">
																<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
																<label className="form-check-label" htmlFor="flexRadioDefault1">{" Individual Session"}</label>
															</div>
															<div className="form-check">
																<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
																<label className="form-check-label" htmlFor="flexRadioDefault1">{" Group Session"}</label>
															</div>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<button type="button" className="btn btn-danger btn-xs waves-effect mb-2 waves-light">Delete Course</button>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<button type="button" className="btn btn-success btn-xs waves-effect mb-2 waves-light">Save Changes</button>
														</div>
													</div>
												</div>
											</form>
										</div>
										{/* end settings content*/}
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

export default CourseInfoSet;
