import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-5 col-xl-4 mr-auto mb-5 mb-lg-0"> <a className="footer-logo h2 text-primary mb-0 font-w-7" href="index.html">
                  I<span className="text-dark font-w-4">Jam</span>
                </a>
                  <p className="my-3">IJam, learn today Jam tomorrow</p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link className="border rounded px-2 py-1 text-dark" to="#"><i className="la la-facebook" /></Link>
                    </li>
                    <li className="list-inline-item">
                      <Link className="border rounded px-2 py-1 text-dark" to="#"><i className="la la-dribbble" /></Link>
                    </li>
                    <li className="list-inline-item">
                      <Link className="border rounded px-2 py-1 text-dark" to="#"><i className="la la-instagram" /></Link>
                    </li>
                    <li className="list-inline-item">
                      <Link className="border rounded px-2 py-1 text-dark" to="#"><i className="la la-twitter" /></Link>
                    </li>
                    <li className="list-inline-item">
                      <Link className="border rounded px-2 py-1 text-dark" to="#"><i className="la la-linkedin" /></Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="row">
                    <div className="col-12 col-sm-4 navbar-light">
                      <h5 className="mb-4">Pages</h5>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-3"><a className="list-group-item-action" href="about-us-1.html">About</a>
                        </li>
                        <li className="mb-3"><a className="list-group-item-action" href="product-grid.html">Shop</a>
                        </li>
                        <li className="mb-3"><a className="list-group-item-action" href="faq.html">Faq</a>
                        </li>
                        <li><a className="list-group-item-action" href="contact-us.html">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-light">
                      <h5 className="mb-4">Service</h5>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-3"><Link className="list-group-item-action">Content Writing</Link></li>
                        <li className="mb-3"><Link className="list-group-item-action">Documentation</Link></li>
                        <li className="mb-3"><Link className="list-group-item-action" to="/login">Account</Link></li>
                        <li><a className="list-group-item-action" href="career.html">Careers</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-light">
                      <h5 className="mb-4">Our Address</h5>
                      <div className="mb-3">
                        <p className="mb-0 text-muted">423B, Road Wordwide Country, USA</p>
                      </div>
                      <div className="mb-3"> <a className="btn-link" href="mailto:themeht23@gmail.com"> themeht23@gmail.com</a>
                      </div>
                      <div> <a className="btn-link" href="tel:+912345678900">+91-234-567-8900</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-5">
                <div className="col">
                  <hr className="m-0" />
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-md-6">Copyright ©2020 All rights reserved
          </div>
                <div className="col-md-6 text-md-right">
                  <ul className="list-inline mb-0">
                    <li className="mr-3 list-inline-item"> <Link className="list-group-item-action" to="#">Term Of Service</Link></li>
                    <li className="mr-3 list-inline-item"> <Link className="list-group-item-action" to="#">Privacy Policy</Link></li>
                    <li className="list-inline-item"> <Link className="list-group-item-action" to="#">Support</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </>
      </div>
    );
  }
}

export default Footer;
