import React from 'react'
import { useStateValue } from '../Staateprovider/Stateprovider'
import CheckoutProduct from './CheckoutProduct'


function Checkout() {
    const [{basket},dispacth]=useStateValue()
  return (
    <div>
        <div className="checkouttitile">
            <h1>Your chekout Product</h1>

        </div>
        {
           basket.map((item,i)=>{
             <CheckoutProduct
             key={i}
             id={item.id}
             price={item.price}
             descrption={item.descrption}
             image={item.image}
             rating={item.rating}


             
             
             />
           }) 
        }

        {/* <CheckoutProduct/> */}

      
    </div>
  )
}

export default Checkout
