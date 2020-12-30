import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
  render() {
    return (
      <div>
        <>
          {/* page wrapper start */}
          <div className="page-wrapper">

            {/*hero section start*/}
            <div>
              <Hero mpage="Login" sec1="Home" sec2="Account" sec3="Login" />
            </div>

            {/*hero section end*/}

            <div className="page-content">
              {/*login start*/}
              <section>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-12">
                      <img className="img-fluid" src="assests/images/login.png" alt="login" />
                    </div>
                    <div className="col-lg-5 col-12">
                      <div>
                        <h2 className="mb-3">Sign In</h2>
                        <form id="contact-form" method="post" action="php/contact.php">
                          <div className="messages" />
                          <div className="form-group">
                            <input id="form_name" type="text" name="name" className="form-control" placeholder="User name" required="required" data-error="Username is required." />
                            <div className="help-block with-errors" />
                          </div>
                          <div className="form-group">
                            <input id="form_password" type="password" name="password" className="form-control" placeholder="Password" required="required" data-error="password is required." />
                            <div className="help-block with-errors" />
                          </div>
                          <div className="form-group mt-4 mb-5">
                            <div className="remember-checkbox d-flex align-items-center justify-content-between">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="check1" />
                                <label className="form-check-label" htmlFor="check1">Remember me</label>
                              </div>
                              <Link to="/forgot-password" class="btn-link">Forgot password?</Link>
                            </div>
                          </div> <Link to="#" className="btn btn-primary">Login Now</Link>
                        </form>
                        <div className="d-flex align-items-center mt-4"> <span className="text-muted mr-1">Don't have an account?</span>
                          <Link to="/sign-up" class="btn-link">Sign Up</Link>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/*login end*/}


            </div>



          </div>

          <div className="scroll-top"><Link className="smoothscroll" to="#top">Scroll Top</Link></div>
        </>

      </div>
    );
  }
}
export default SignIn;