import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-6">
          <div className="main-banner-content position-relative">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner position-absolute top-0 start-0 p-3 ">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro</h5>
                <p>From $999.50 or $46.75/mo.</p>
                <Link to="/buy" className="btn ">Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
        <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
        <div className="main-banner-content position-relative">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner position-absolute top-0 start-0 p-3 ">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro</h5>
                <p>From $999.50 or $46.75/mo.</p>
                <Link to="/buy" className="btn ">Buy Now</Link>
              </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
