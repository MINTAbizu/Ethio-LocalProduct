import React from 'react';
import '../product/product.css';
import { useStateValue } from '../Staateprovider/Stateprovider';

function Product({ image, price, description, rating, watch, id }) {
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'Addtobasket',
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
                description: description,
            },
        });
    };

    return (
        <div className='product container'>
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
                <img className={`${watch}`} src={image} alt="" />
            </div>
            <div className="addtocartbtn">
                <button onClick={addToBasket}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Product;