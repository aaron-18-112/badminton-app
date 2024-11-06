"use client";

import './globals.css';
import {useEffect, useState} from "react";
import {HamburgerMenu} from "@/app/components/hamburger-menu";
import {Accordion} from "@/app/components/join-accordion"

export default function Home() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const [date, setDate] = useState(null);
    useEffect(() => {
        const d = new Date(2024, 10, 12, 17, 0);
        setDate(d);
    }, []);

    const formattedDate = date
        ? date.toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: '2-digit'})
        : 'Loading...';


    const formattedTime = date
        ? `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
        : '';

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
            <HamburgerMenu toggleMenu={toggleMenu} menuOpen={menuOpen}/>
            <div className={`content-container ${menuOpen ? 'menu-open' : ''}`}>
                <section className="content1">
                    <p>Next Badminton Session: {formattedDate}, {formattedTime}</p>
                    <p>Total Number of Players: XXX</p>
                </section>
                <Accordion/>
                <section className="content3">

                    <table style={{width: "100%"}}>
                        <thead>
                        <tr>
                            <th style={{width:"80%"}}>Name</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>xxx</td>
                            <td>xxx</td>
                        </tr>
                        <tr>
                            <td>xxx</td>
                            <td>xxx</td>
                        </tr>
                        <tr>
                            <td>xxx</td>
                            <td>xxx</td>
                        </tr>
                        <tr>
                            <td>xxx</td>
                            <td>xxx</td>
                        </tr>
                        <tr>
                            <td>xxx</td>
                            <td>xxx</td>
                        </tr>
                        </tbody>
                    </table>

                </section>
            </div>

        </div>
    )
        ;
}
