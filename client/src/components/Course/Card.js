import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/card-style.css";

export default function Card(props) {
	const { courseID, imgsrc, title, par } = props;

	return (
		<div className="card text-center">
			<div className="overflow">
				<img src={imgsrc} className="card-img-top" alt="course thumbnail" />
			</div>
			<div className="card-body text-dark">
				<h4 className="Card-title">{title}</h4>
				<p className="card-text text-secondary">{par}</p>

				<Link to={`/Course/CourseInfoDesc/${courseID}`} className="btn btn-outline-success">Show More</Link>
			</div>
		</div>
	)
}

