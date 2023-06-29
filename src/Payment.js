import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import "./CSS/Payment.css"
import { Link } from 'react-router-dom';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();



  return (
    <div className='payment' >
      <div className='payment__container'>
        <h1>
            Checkout(
                <Link to="/checkout"> {basket?.length} items </Link>
                )
        </h1>



            {/*Select address*/}
        <div className="payment__section">
            <div className="payment__title">
                <h3> Delivery address</h3>
            </div>
            <div className="payment__address">
                <p> {user?.email} </p>
                <p> 2b 1739 a </p>
                <p> Vasant Vihar </p>
                <p> Saharanpur </p>
            </div>
        </div>
            {/*Review Cart*/}
        <div className="payment__section">
            <div className="payment__title">
                <h3> Review items for Delivery</h3>
            </div>
            <div className="payment__items">
              {basket.map((item) => (
                  <CheckoutProduct
                    id = {item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                   />
                ))
              }
            </div>
        </div>        
            {/*Select payment method*/}
            <div className="payment__section">
                <div className="payment__title">
                    <h3> Payment Method </h3>
                </div>
                <div className="payment_details">
                    {/* Payment gateway api */}
                </div>
            </div>
      </div>
    </div>
  )
}

export default Payment
