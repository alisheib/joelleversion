import React from 'react'
import { Component } from 'react'
import Cards from '../../components/Course/Cards'
import Sidebar from '../../components/General/Sidebar'

class AllCourses extends Component {


	render() {
		return (
			<div>
				<Sidebar />
				<h3 className="h22">All Courses</h3>
				<Cards />
			</div>
		)
	}
}


export default AllCourses
