import React from 'react';
import './CSS/Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, price, rating, image}) {
    const [{basket},dispatch]= useStateValue();

    //  console.log("This is the basket>>>", basket);

    const addToBasket = () => {
      //dispatch item to data layer
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id, title:title, price:price, image:image, rating:rating
        },
      });
    }
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
      <button onClick={addToBasket}> Add to Cart</button>
    </div>
  )
}

export default Product
