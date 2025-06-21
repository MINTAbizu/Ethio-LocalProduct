import axios from 'axios';

const CHAPA_URL = 'https://api.chapa.co/v1/transaction/initialize';
const CHAPA_VERIFY_URL = 'https://api.chapa.co/v1/transaction/verify/';

export const initializePayment = async (data) => {
    try {
        const response = await axios.post(
            CHAPA_URL,
            {
                amount: data.amount,
                currency: 'ETB',
                email: data.email,
                first_name: data.firstName,
                last_name: data.lastName,
                tx_ref: data.txRef,
                callback_url: `${window.location.origin}/payment-verification`,
                return_url: `${window.location.origin}/payment-success`,
                customization: {
                    title: 'Ethio Local Product',
                    description: 'Payment for your order'
                }
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_CHAPA_SECRET_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const verifyPayment = async (transactionId) => {
    try {
        const response = await axios.get(
            `${CHAPA_VERIFY_URL}${transactionId}`,
            {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_CHAPA_SECRET_KEY}`
                }
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
}; 