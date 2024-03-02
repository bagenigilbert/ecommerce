import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <>
 <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="main-banner-content position-relative">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner position-absolute top-0 start-0">
                <h4>Best Selling Products</h4>
                <h5>iPad S13+ Pro</h5>
                <p className="mb-0">From $999.50 or $46.75/mo.</p>
                <Link to="/buy" className="btn">Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="small-banner-content position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner position-absolute top-0 start-0 ">
                    <h4>SUPERCHARGED FOR PROS</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p className='mb-0'>From $999.50 or $46.75/mo.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="small-banner-content position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner position-absolute top-0 start-0">
                    <h4>New Arrival</h4>
                    <h5>Buy iPad Air</h5>
                    <p className='mb-0' >From $599 <br/> or $55.95/mo.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="small-banner-content position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner position-absolute top-0 start-0">
                    <h4>New Arrival</h4>
                    <h5>Buy iPad Air</h5>
                    <p className='mb-0'>From $599 <br/> or $55.95/mo.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="small-banner-content position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner position-absolute top-0 start-0">
                    <h4>New Arrival</h4>
                    <h5>Buy iPad Air</h5>
                    <p className='mb-0'>From $599 <br/> or $55.95/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>   

    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
          <div className="services d-flex align-items-center justify-content-between ">
            <div>
              <img src="images/service.png" alt="services" />
              <div>
             <h6>Free Shipping</h6>
               <p className='mb-0'>From all over the world</p>
              </div>
            </div>
            <div>
            <img src="images/service-02.png" alt="services" />
            <h6>Daily Surprise Offers</h6>
              <p className='mb-0'>Save Upto 25% off</p>
            </div>
            <div>
            <img src="images/service-03.png" alt="services" />
            <div>
            <h6>Support 24/7</h6>
              <p className='mb-0'>Shop with an expert</p>
              </div>
            </div>
            <div>
            <img src="images/service-04.png" alt="services" />
            <div>
            <h6>Affordable Prices</h6>
            <p className='mb-0'>Get Factory Best Price</p>
              </div>
            </div>
            <div>
            <div>
            <img src="images/service-05.png" alt="services" />
            <div>
              <h6>Secure Payment</h6>
           <p className='mb-0'>100% Protected Payment</p>
              </div>

            </div>
       
            </div>
          </div>
          </div>
        </div>
      </div>

    </section>

    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap align-items-center justify-content-between">
           <div className='d-flex align-items-center gap-30'>
                <div>
               <h6>Cameras</h6>
               <p>10 items</p>
               </div>
               <img src="images/camera.jpg" alt="camera" />
               </div>
               <div className='d-flex align-items-center gap-30'>
                <div>
               <h6>Music & Gaming</h6>
               <p>10 items</p>
               </div>
               <img src="images/headphone.jpg" alt="camera" />
               </div>
               
               <div className='d-flex align-items-center gap-30'>
                <div>
               <h6>Smart Tv</h6>
               <p>10 items</p>
               </div>
               <img src="images/tv.jpg" alt="camera" />
               </div>
               <div className='d-flex align-items-center gap-30'>
                <div>
               <h6>Smart Watches</h6>
               <p>10 items</p>
               </div>
               <img src="images/watch.jpg" alt="camera" />
               </div>
               <div className='d-flex align-items-center gap-30'>
                <div>
               <h6>Music & Gaming</h6>
               <p>10 items</p>
               </div>
               <img src="images/headphone.jpg" alt="camera" />
               </div>
               
               <div className='d-flex align-items-center gap-30'>
                <div>
               <h6>Smart Tv</h6>
               <p>10 items</p>
               </div>
               <img src="images/tv.jpg" alt="camera" />
               </div>
               <div className='d-flex align-items-center gap-30'>
                <div>
               <h6>Smart Watches</h6>
               <p>10 items</p>
               </div>
               <img src="images/watch.jpg" alt="camera" />
               </div>
               <div className='d-flex align-items-center gap-30'>
                <div>
               <h6>Smart Watches</h6>
               <p>10 items</p>
               </div>
               <img src="images/camera.jpg" alt="camera" />
               </div>
               
               
              </div>
              
              </div>
              </div>
              </div>

     </section>

     <section className='marque-wrapper py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='marquee-inner-wrapper card-wrapper'>
          <Marquee className='d-flex '>
          <div className='mx-4 w-25'>
               <img src="images/brand-01.png" alt="brand" />
            </div>
            <div className='mx-4 w-25'>
               <img src="images/brand-02.png" alt="brand" />
            </div>
            <div className='mx-4 w-25'>
               <img src="images/brand-03.png" alt="brand" />
            </div>
            <div className='mx-4 w-25'>
               <img src="images/brand-04.png" alt="brand" />
            </div>
            <div className='mx-4 w-25'>
               <img src="images/brand-05.png" alt="brand" />
            </div>
            <div className='mx-4 w-25'>
               <img src="images/brand-06.png" alt="brand" />
            </div>
            <div className='mx-4 w-25'>
               <img src="images/brand-07.png" alt="brand" />
            </div>
            <div className='mx-4 w-25'>
               <img src="images/brand-08.png" alt="brand" />
            </div>
            

          </Marquee>
              </div>
              </div>
              </div>
              </div>
             
     </section>

    <section className='blog-wrapper py-5 home-wrapper-2'>
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-12'>
        <h3 className='section-heading'>Our Latest Blogs</h3>
      </div>
     <BlogCard />
     <BlogCard />
     <BlogCard />
     <BlogCard />
    </div>
      </div>
     </section>
     <section className='blog-wrapper py-5 home-wrapper-2'>
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-12'>
        <h3 className='section-heading'>Featured Colection</h3>
      </div>
     <ProductCard />
     <ProductCard />
     <ProductCard />
     <ProductCard />
    </div>
      </div>
     </section>
    </>
  );
};

export default Home;
