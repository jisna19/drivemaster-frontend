import React, { useState } from 'react';
import axios from 'axios';

const Payment = ({ bookingDetails }) => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [message, setMessage] = useState('');

    const handlePayment = async () => {
        try {
            const token = localStorage.getItem('token'); // Get the token from local storage
            const response = await axios.post("http://localhost:5000/processPayment", {
                bookingDetails,
                paymentMethod
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Error processing payment");
        }
    };

    return (
        <div className="payment-container">
            <h2>Payment</h2>
            <div>
                <label>
                    <input 
                        type="radio" 
                        value="Credit Card" 
                        checked={paymentMethod === 'Credit Card'} 
                        onChange={(e) => setPaymentMethod(e.target.value)} 
                    />
                    Credit Card
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="PayPal" 
                        checked={paymentMethod === 'PayPal'} 
                        onChange={(e) => setPaymentMethod(e.target.value)} 
                    />
                    PayPal
                </label>
            </div>
            <button onClick={handlePayment} className="btn btn-primary">Submit Payment</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Payment;
