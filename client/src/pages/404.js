import React from 'react';

class error extends React.Component {
  render() {
    return (
      <div>
        <>
          <div className="page-wrapper">
            {/*body content start*/}
            <div className="page-content">
              {/*404 start*/}
              <section className="fullscreen-banner p-0">
                <div className="container h-100">
                  <div className="row h-100">
                    <div className="col-12 text-center h-100 d-flex align-items-center">
                      <div className="w-100"><img className="img-fluid d-inline mb-5" src="assests/images/404.png" alt />
                        <h2>Oops! Page Not Found</h2>
                        <h6>You’re either misspelling the URL
                  or requesting a page that's no longer here.</h6>
                        <a className="btn btn-primary" href="index.html">Back To Home Page</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/*404 end*/}
            </div>
            {/*body content end*/}
          </div>
          {/* page wrapper end */}
          {/*back-to-top start*/}
          <div className="scroll-top"><a className="smoothscroll" href="#top">Scroll Top</a></div>

        </>

      </div>
    );
  }
}
export default error;