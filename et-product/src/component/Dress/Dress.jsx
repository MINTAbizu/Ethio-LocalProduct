import React from 'react'
import image1 from '../image/image/beauty.jpg';
import image3 from '../image/prodctimg.jpg';
import homeimage from '../image/home.jpg';
import { useStateValue } from '../Staateprovider/Stateprovider';
import '../product/product.css';
import '../Dress/dress.css'

const dressdata = [
    {
        id: 1,
        image: image1,
        price: 121,
        rating: 4,
        description: "nice women"
    },
    {
        id: 2,
        image: image3,
        price: 23,
        rating: 5,
        description: "nice for all"
    },
    {
        id: 3,
        image: homeimage,
        price: 150,
        rating: 4,
        description: "Summer Dress"
    },
    {
        id: 4,
        image: image1,
        price: 200,
        rating: 5,
        description: "Evening Gown"
    },  {
        id: 1,
        image: image1,
        price: 121,
        rating: 4,
        description: "nice women"
    },
    {
        id: 2,
        image: image3,
        price: 23,
        rating: 5,
        description: "nice for all"
    },
    {
        id: 3,
        image: homeimage,
        price: 150,
        rating: 4,
        description: "Summer Dress"
    },
    {
        id: 4,
        image: image1,
        price: 200,
        rating: 5,
        description: "Evening Gown"
    }
];

function DressCard({ id, image, price, rating, description }) {
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
        <div className='product cards '>
            <img className='card-img-top' src={image} alt={description} />
            <div className="card-body">
                <h5 className="card-title">{description}</h5>
                <p className="card-text">Birr {price}:00 ብር ብቻ</p>
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

function Dress() {
    return (
        <div className="container-fluid productsection dresscard">
            <div className="row">
                {dressdata.map((dress) => (
                    <div key={dress.id} className='col-md-3 col-sm-6 mb-4'>
                        <DressCard {...dress} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dress
