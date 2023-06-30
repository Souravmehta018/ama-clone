import React, { useState } from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import "./CSS/Payment.css"
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from './Reducer';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';


function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const navigat = useNavigate();

    const stripe = useStripe()
    const elements = useElements()

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    const handleSubmit = async event => {
        // Prevent the form from refreshing.
        event.preventDefault();
      
        // Submit the form.
        await event.target.submit();
//clientSecret tells stipe what to charge and help get card element
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        } ).then(({paymentIntent}) => {
            // paymentIntent is for payment confirmation
            setSucceded(true)
            setError(null);
            setProcessing(false);

            navigat('/orders')
        })
      };

      const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            url: '/payment/create?total =${getBasketTotal{basket} * 100}'
        })
        setClientSecret(response.data.clientSecret)
      }


    //const payload = await stripe

      const handleChange = event => {
        // Set the `disabled` state to `false` if the `event` object contains valid card information.
        const isCardValid = event.value.length > 0;
        setDisabled(!isCardValid);
      };
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
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className="payment__priceCont">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3> Order Total: {value}           
                                    </h3>
                                )}
                                decimalScale={2}
                                value = {getBasketTotal(basket)}
                                displayType ={'text'}
                                thousandsSeparator={true}
                                prefix={'Rs. '}
                            />
                            <button disabled={processing || disabled || succeeded }>
                                <span> {processing ? <p> Processing </p> : 'Buy Now'} </span>
                            </button>

                        </div>
                        {/* If there is an error then show this div */}
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Payment