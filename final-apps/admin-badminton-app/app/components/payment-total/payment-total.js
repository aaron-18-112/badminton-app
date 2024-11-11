"use client";

import "./payment-total.css"
import {useState} from "react";

export function PaymentTotal() {

    const [amount, setAmount] = useState('£0.00');

    const handleChange = (event) => {
        let value = event.target.value.replace(/[^0-9.]/g, '');
        setAmount(value);
    };

    const handleBlur = () => {
        let value = amount.replace(/[^0-9.]/g, '');
        if (value) {
            value = parseFloat(value).toFixed(2);
            setAmount('£' + value);
        } else {
            setAmount('£0.00');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            let value = amount.replace(/[^0-9.]/g, '');
            value = parseFloat(value).toFixed(2);
            setAmount('£' + value);
        }
    };

    return (

        <section className="payment-total">
            <h2 className="black-text">Enter Total Cost:</h2>
            <input
                type="text"
                id="input-amount"
                value={amount}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                placeholder="£0.00"
            />
        </section>

    );
}