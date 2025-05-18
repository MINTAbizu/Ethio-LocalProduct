import React from 'react';
import { useStateValue } from '../Staateprovider/Stateprovider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket }] = useStateValue();
    
    return (
        <div>
            <div className="checkouttitle">
                <h1>Your Checkout Products</h1>
            </div>
            {basket.map((item, i) => (
                <CheckoutProduct
                    key={i}
                    id={item.id}
                    price={item.price}
                    description={item.description}
                    image={item.image}
                    rating={item.rating}
                />
            ))}
        </div>
    );
}

export default Checkout;