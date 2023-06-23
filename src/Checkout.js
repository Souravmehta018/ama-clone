import React from 'react';
import './CSS/Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img src="https://www.trelleborg.com/fluidhandling/-/media/integration/fhs/superminessup25_tsales_300dpi_gif_180mmx15mmgif.ashx?rev=8be79c249fe0473f8d8ef8d375eedced&hash=A21190E4DD3FDE9CA6CD83FFF91D995A" 
            alt="" className="chekout__ad" />

            <div className="checkout__title">
              <h2 >Your Shopping basket</h2>

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
        <div className="checkout__right">
          <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout
