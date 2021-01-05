import React from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/img/dummyimg.png';

// TODO Refactor to take courses as props and map them to Cards
class Cards extends React.Component {
	render() {
		return (
			<div className="content">
				<div className="container-fluid d-flex justify-content-center">
					<div className="row">
						<div className="col-md-4"><Card imgsrc={img1} title="Title" par="dummy text" /></div>
						<div className="col-md-4"><Card imgsrc={img1} title="Title" par="dummy text" /></div>
						<div className="col-md-4"><Card imgsrc={img1} title="Title" par="dummy text" /></div>
					</div>
				</div>
			</div>
		);
	}

}

export default Cards;
