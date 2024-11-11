"use client";

import "./payment-history.css"

export function PaymentHistory () {
    return (
        <section className="payment-history">
            <h3>Payment History</h3><br/>
            <table style={{width: '100%'}}>
                <thead>
                <tr>
                    <th style={{width: '80%'}}>Name</th>
                    <th>Paid?</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Name 1</td>
                    <td><input name="checkbox" type="checkbox"/></td>
                </tr>
                <tr>
                    <td>Name 2</td>
                    <td><input name="checkbox" type="checkbox"/></td>
                </tr>
                <tr>
                    <td>Name 3</td>
                    <td><input name="checkbox" type="checkbox"/></td>
                </tr>
                </tbody>
            </table>
        </section>
    )
}