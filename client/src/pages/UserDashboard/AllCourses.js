import React from 'react'
import Cards from '../../components/Course/Cards'
import Sidebar from '../../components/General/Sidebar'
function AllCourses() {
	return (
		<div>
			<Sidebar />
			<h3 className="h22">All Courses</h3>
			<Cards />
			<Cards />
			<Cards />

		</div>

	)
}

export default AllCourses
