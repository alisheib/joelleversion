import React from 'react';

class LandingPage extends React.Component {
	render() {
		return (
			<div>
				<div id="slides" className="carousel slide" data-ride="carousel">
					<ul className="carousel-indicators">
						<li data-target="#slides" data-slide-to={0} className="active" />
						<li data-target="#slides" data-slide-to={1} />
						<li data-target="#slides" data-slide-to={2} />
					</ul>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src="assets/img/Slider/main-home-1.jpg" alt="carousel-item" />
							<div className="carousel-caption">
								<h3>Want to Learn Music From The <br />Comfort Of Your Home?</h3>
								<button type="button" className="btn btn-primary btn-lg">Get Started</button>
							</div>
						</div>
						<div className="carousel-item">
							<img src="assets/img/Slider/main-home-2.jpg" alt="carousel-item" />
							<div className="carousel-caption">
								<h3>Want to Learn Music From The <br />Comfort Of Your Home?</h3>
								<button type="button" className="btn btn-primary btn-lg">Get Started</button>
							</div>
						</div>
						<div className="carousel-item">
							<img src="assets/img/Slider/main-home-3.jpg" alt="carousel-item" />
							<div className="carousel-caption">
								<h3>Want to Learn Music From The <br />Comfort Of Your Home?</h3>
								<button type="button" className="btn btn-primary btn-lg">Get Started</button>
							</div>
						</div>
					</div>
				</div>
				{/*- Process Section */}
				<div className="container-fluid padding" style={{ paddingTop: '5%' }}>
					<center><h1>Here's How It Works</h1></center>
					<div className="row text-center padding">
						<div className="col-xs-12 col-sm-6 col-md-4">
							<i> <img src="assets/img/Steps/Step1.png" alt="process step" /></i>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4">
							<i> <img src="assets/img/Steps/Step2.png" alt="process step" /></i>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4">
							<i> <img src="assets/img/Steps/Step3.png" alt="process step" /></i>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4">
							<i> <img src="assets/img/Steps/Step4.png" alt="process step" /></i>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4">
							<i> <img src="assets/img/Steps/Step5.png" alt="process step" /></i>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4">
							<i> <img src="assets/img/Steps/Step6.png" alt="process step" /></i>
						</div>
					</div>
					<hr className="my-4" />
				</div>
				{/*- Point System */}
				<div className="container-fluid padding">
					<center><h1 style={{ marginTop: '5%' }}>Our Unique Points-Based Payments</h1></center>
				</div>
				<section id="pointSection">
					<img id="sideImage" src="assets/img/Point-System/POS.svg" alt="point based system" />
					<div id="pointSystem">
						<div className="pointItem">
							<div className="imageParent">
								<img src="assets/img/Point-System/smartphone.svg" alt="point based system" />
							</div>
							<h2>Highly Effective Payment Method</h2>
						</div>
						<div className="pointItem">
							<div className="imageParent">
								<img src="assets/img/Point-System/credit-card.svg" alt="point based system" />
							</div>
							<h2>Highly Secure</h2>
						</div>
						<div className="pointItem">
							<div className="imageParent">
								<img src="assets/img/Point-System/advisor.svg" alt="point based system" />
							</div>
							<h2>Fiduciary Accounts Support</h2>
						</div>
						<div className="pointItem">
							<div className="imageParent">
								<img src="assets/img/Point-System/refund.svg" alt="point based system" />
							</div>
							<h2>Completely Refundable</h2>
						</div>
					</div>
				</section>
				{/*- Signup  */}
				<div className="bg-image">
					<section id="signForm">
						<h2>Register Now!</h2>
						<p>Create a free account and get started.</p>
						<form>
							<input type="text" name="name" placeholder="Full Name" /><br />
							<input type="email" name="email" placeholder="Email Address" /><br />
							<input type="password" name="pass" placeholder="Password" /><br />
							<input type="password" name="pass2" placeholder="Retype Password" /><br />
							<div id="checkbox">
								<input type="checkbox" name="terms" />
								<label htmlFor="terms">I have accepted the Terms and Conditions</label>
							</div>
							<div>
								<button type="submit" id="submitButton" value="submit">SIGN UP NOW</button>
							</div>
						</form>
					</section>
				</div>

				{/*- Contact Us  */}
			</div>
		);
	}
}
export default LandingPage;