import React from 'react';
import '../../component/Chenckout/checkoptproduct.css';
import { useStateValue } from '../Staateprovider/Stateprovider';

function CheckoutProduct({ id, price, description, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeBasket = () => {
        dispatch({
            type: 'removebasket',
            id: id,
        });
    };

    return (
        <div className='product'>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="price">
                ${price}
            </div>
            <div className="rating">
                {Array(rating).fill().map((_, i) => (
                    <p key={i}>⭐</p>
                ))}
            </div>
            <div className="productimage">
                <img src={image} alt="" />
            </div>
            <div className="removebtn">
                <button onClick={removeBasket}>Remove from Basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;