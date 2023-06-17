import React from 'react';
import './CSS/Product.css';

function Product({title, price, rating, image}) {
  return (
    <div className='product'>
            {/*pid= "018"*/}
            <p className="product__title">
              {title}
            </p>
            <p className="product__price">
              <small>₹</small> <strong> {price} </strong>
            </p>
            <div className="product__rating">
              {Array(rating).fill()
              .map((_,i) => (
                <p> ⭐ </p>
              ) ) }            
            </div>            
            <img src= {image} 
            alt="" className="product__image" />
      <button> Add to Cart</button>
    </div>
  )
}

export default Product
