import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
            Welcome to [Your Website Name], your ultimate online shopping destination! Our e-commerce platform offers a wide range of high-quality products across various categories including fashion, electronics, home essentials, and more.Enjoy a seamless shopping experience with our user-friendly interface, secure payment options, and fast shipping. </p>
            <p>  Our dedicated customer support team is available 24/7 to assist you with any queries. Shop confidently, knowing your satisfaction is our top priority. Discover exclusive deals and personalized recommendations just for you at [Your Website Name]. Happy shopping!</p>
        </div>
    </div>
  )
}

export default DescriptionBox
