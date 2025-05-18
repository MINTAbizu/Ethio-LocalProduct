const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());


app.post('/api/payment-confirmation', async (req, res) => {
    const { transaction_id } = req.body;

    try {
        const response = await axios.get(`https://api.chapa.co/transaction/verify/${transaction_id}`, {
            headers: {
                'Authorization': 'Bearer YOUR_SECRET_KEY',
            }
        });

        const paymentDetails = response.data;
        // Handle payment status (success, pending, failed, etc.)
        if (paymentDetails.status === 'successful') {
            // Payment was successful
            res.status(200).json({ message: 'Payment successful', paymentDetails });
        } else {
            // Payment failed or is pending
            res.status(400).json({ message: 'Payment failed', paymentDetails });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error verifying payment', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});