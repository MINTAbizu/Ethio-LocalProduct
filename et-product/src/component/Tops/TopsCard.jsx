
import React from "react";
import { useStateValue } from "../Staateprovider/Stateprovider";



function TopsCard({ image, price, description, rating, id }) {
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
        <div className='product card'>
            <img className='card-img-top' src={image} alt={description} />
            <div className="card-body">
                <h5 className="card-title">{description}</h5>
                <p className="card-text">${price}</p>
                <div className="rating">
                    {Array(rating).fill().map((_, i) => (
                        <span key={i}>⭐</span>
                    ))}
                </div>
                <button className="btn btn-primary" onClick={addToBasket}>Add to Cart</button>
            </div>
        </div>
    );
}


export default TopsCard