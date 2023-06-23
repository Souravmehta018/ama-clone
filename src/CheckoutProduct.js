import React from 'react'
import './CSS/CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,image,title,price}) {
  const [{basket}, dispatch] = useStateValue(); //though basket is never used here but isko hatake dispatch function work nahi krta
  console.log("This is the dispatch>>>", dispatch); 

    const removeFromBasket = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    }

  return (
    <div className='checkoutProduct'>
        <img src={image} alt="" className="checkoutProduct__image" />

        <div className="checkoutProduct__info">
            
            <p className="checkoutProduct__title">
                {title}</p>

            <p className="checkoutProduct__price">
                <small>₹ </small>
                <strong>{price}</strong>

            </p>
            <button onClick={removeFromBasket}>Remove</button>
        </div>      
    </div>
  )
}

export default CheckoutProduct
