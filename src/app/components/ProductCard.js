import React from 'react';
import ReactStars from "react-rating-stars-component";

const ProductCard = () => {
  return (
    <div className='col-3'>
    <div className='product-card position-relative'>
    <div className='product-image'>
        <img src="images/watch.jpg" alt="watch" className='card-img-top' />
    </div>
    <div className='product-details'>
        <h6 className='brand'>Havels</h6>
        <h5 className='card-title'>
            Apple smart watch
        </h5>
        <ReactStars
            count={5}size={24} value={3} edit={false} activeColor="#ffd700"/>
        <p className="price-wrapper">
        <span className='red-p'>$100</span> &nbsp; <strike>$250</strike>
        </p>
    </div>
    <div className='card-footer'>
        <button className='button'>Buy Now</button>
        </div>
    </div>
    </div>
  );
}

export default ProductCard;
