import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='col-3'> 
    <div className='blog-card'>
    <div className='blog-card-image'>
        <img src="images/blog-1.jpg" alt="blog" className='img-fluid ' />
    </div>
    <div className='blog-card-content'>
        <p className='date'>02 March, 2024</p>
        <h5 className='title'>A Beautiful Sunday Morning</h5>
        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Link to="/" className='button'>Read More</Link>
    </div>
    </div>
        </div>
  )
}

export default BlogCard
