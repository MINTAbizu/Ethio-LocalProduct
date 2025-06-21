import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { verifyPayment } from '../../services/chapaPayment';

const PaymentSuccess = () => {
  const location = useLocation();
  const [status, setStatus] = useState('verifying');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const txRef = params.get('tx_ref');
    if (txRef) {
      verifyPayment(txRef)
        .then(res => {
          if (res.status === 'success') {
            setStatus('success');
            setMessage('Thank you for your purchase. Your payment has been received.');
          } else {
            setStatus('failed');
            setMessage('Payment could not be verified. Please contact support.');
          }
        })
        .catch(() => {
          setStatus('failed');
          setMessage('Payment verification failed.');
        });
    } else {
      setStatus('failed');
      setMessage('No transaction reference found.');
    }
  }, [location]);

  return (
    <div className="payment-success">
      <h1>{status === 'success' ? 'Payment Successful!' : 'Payment Verification'}</h1>
      <p>{message}</p>
    </div>
  );
};

export default PaymentSuccess; 