import React from 'react'
import { useStateValue } from '../Staateprovider/Stateprovider';
import '../product/product.css';
import image1 from '../image/image/Beauty.jpg';
import image3 from '../image/prodctimg.jpg';
import homeimage from '../image/home.jpg';
import '../Dress/dress.css'

// Jeans data array
const jeansData = [
    {
        id: 1,
        image: image1,
        price: 1231,
        rating: 3,
        description: "Classic Blue Jeans"
    },
    {
        id: 2,
        image: homeimage,
        price: 1231,
        rating: 4,
        description: "Slim Fit Jeans"
    },
    {
        id: 3,
        image: image3,
        price: 1231,
        rating: 5,
        description: "Distressed Denim"
    },
    {
        id: 4,
        image: image1,
        price: 1231,
        rating: 4,
        description: "High Waist Jeans"
    },
    {
        id: 5,
        image: homeimage,
        price: 1231,
        rating: 3,
        description: "Bootcut Jeans"
    },
    {
        id: 6,
        image: image3,
        price: 1231,
        rating: 4,
        description: "Skinny Jeans"
    },
    {
        id: 7,
        image: image1,
        price: 1231,
        rating: 5,
        description: "Mom Fit Jeans"
    },
    {
        id: 8,
        image: homeimage,
        price: 1231,
        rating: 4,
        description: "Boyfriend Jeans"
    }
];

function JeansCard({ image, price, description, rating, id }) {
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
                <p className="card-text">{price}:00 ብር ብቻ</p>
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

function Jeans() {
    return (
        <div className="container-fluid productsection dresscard">
            <div className="row">
                {jeansData.map((jeans) => (
                    <div key={jeans.id} className="col-md-3 col-sm-6 mb-4">
                        <JeansCard {...jeans} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Jeans
