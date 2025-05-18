import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
    const [amount, setAmount] = useState(0);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handlePayment = async () => {
        try {
            const response = await axios.post('https://api.chapa.co/transaction/initialize', {
                email,
                amount,
                callback_url: 'http://your-server-url/api/payment-confirmation', // Replace with your server URL
            }, {
                headers: {
                    'Authorization': 'Bearer YOUR_SECRET_KEY', // Replace with your secret key
                    'Content-Type': 'application/json',
                },
            });

            const { payment_url } = response.data;
            window.location.href = payment_url; // Redirect to Chapa payment page
        } catch (error) {
            console.error('Error initializing payment:', error);
            setMessage('Error initiating payment. Please try again.');
        }
    };

    return (
        <div>
            <h2>Make Payment</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <button onClick={handlePayment}>Pay Now</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Payment;