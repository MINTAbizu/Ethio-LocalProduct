import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializePayment } from '../../services/chapaPayment';
import { useStateValue } from '../Staateprovider/Stateprovider';
import './Payment.css';

function Payment() {
    const navigate = useNavigate();
    const [{ basket, user }, dispatch] = useStateValue();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getBasketTotal = (basket) => {
        return basket?.reduce((amount, item) => item.price + amount, 0);
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const txRef = `tx-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            
            const paymentData = {
                amount: getBasketTotal(basket),
                email: user?.email || 'customer@example.com',
                firstName: user?.displayName?.split(' ')[0] || 'Customer',
                lastName: user?.displayName?.split(' ')[1] || 'User',
                txRef: txRef
            };

            const response = await initializePayment(paymentData);
            
            if (response.status === 'success') {
                // Redirect to Chapa payment page
                window.location.href = response.data.checkout_url;
            } else {
                setError('Payment initialization failed. Please try again.');
            }
        } catch (err) {
            setError(err.message || 'An error occurred during payment. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout ({basket?.length} items)</h1>
                
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Addis Ababa, Ethiopia</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <div key={item.id} className="payment__item">
                                <img src={item.image} alt={item.description} />
                                <div className="payment__itemDetails">
                                    <p>{item.description}</p>
                                    <p>Birr {item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <div className="payment__priceContainer">
                            <h3>Order Total: Birr {getBasketTotal(basket)}</h3>
                            <button 
                                disabled={loading || basket.length === 0}
                                onClick={handlePayment}
                                className="payment__button"
                            >
                                {loading ? 'Processing...' : 'Pay with Chapa'}
                            </button>
                        </div>
                        {error && <p className="payment__error">{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;