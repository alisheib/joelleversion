import React from 'react'
import Cards from '../../components/Cards'
import SideBar from '../../components/Sidebar'
function MyCourses() {
	return (
		<div>
			<SideBar />
			<h3 className="h22">My Courses</h3>
			<Cards />
			<Cards />
			<Cards />
		</div>

	)
}

export default MyCourses
