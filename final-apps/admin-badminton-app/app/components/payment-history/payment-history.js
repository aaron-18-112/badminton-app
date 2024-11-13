"use client";

import "./payment-history.css";
import React, { useState } from "react";

export function PaymentHistory() {
    const [paymentHistory, setPaymentHistory] = useState([]);

    const togglePaid = (index) => {
        const updatedPayments = paymentHistory.map((entry, i) =>
            i === index ? { ...entry, paid: !entry.paid } : entry
        );
        setPaymentHistory(updatedPayments);
        console.log("Updated Payment History:", updatedPayments);
    };

    return (
        <section className="payment-history">
            <h3>Payment History</h3><br />
            <table style={{ width: '100%', marginTop: '20px' }}>
                <thead>
                <tr>
                    <th style={{ width: '60%' }}>Name</th>
                    <th style={{ width: '40%' }}>Paid</th>
                </tr>
                </thead>
                <tbody>
                {paymentHistory.map((entry, index) => (
                    <tr key={index}>
                        <td>{entry.name}</td>
                        <td>
                            <input
                                type="checkbox"
                                checked={entry.paid}
                                onChange={() => togglePaid(index)}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
}
