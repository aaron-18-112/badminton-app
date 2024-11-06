"use client";

import './globals.css';
import {useEffect, useState} from "react";

export default function Home() {

    const [date, setDate] = useState(null);
    useEffect(() => {
        const d = new Date(2024, 10, 12);
        setDate(d);
    }, []);

    const formattedDate = date
        ? date.toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: '2-digit'})
        : 'Loading...';

    return (
        <div className="page">

            <div className="sidebar">

                <img className="svg-container" alt="Logo" src="logo-SVG.svg"/>

                <nav className="button-container">
                    <button aria-label="Numbers" id="numbers">Numbers</button>
                    <button aria-label="Payment" id="payment">Payment</button>
                    <button aria-label="Admin" id="admin">Admin</button>
                </nav>

            </div>


            <div className="content-container">
                <section className="content1">
                    <h4>Next Badminton Session: {formattedDate}</h4>
                    <h4>Total Number of Players: XXX</h4>
                </section>
                <button className="content2">Join</button>
                <section className="content3">

                <table>
                    <tr>
                        <th>Name</th>
                        <th>Remove</th>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Name 2</td>
                        <td></td>
                    </tr>
                </table>

            </section>
        </div>

</div>
)
    ;
}
