"use client";

import './globals.css';
import {useEffect, useState} from "react";
import {HamburgerMenu} from "@/app/components/hamburger-menu";
import {Accordion} from "@/app/components/accordion";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [date, setDate] = useState(null);
    const [rows, setRows] = useState([]);

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

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const addRow = (fullName) => {
        setRows([...rows, { name: fullName }]);
    };

    const handleRemoveRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };

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
                    <p>
                        <span className="black-text">Next Badminton Session: </span>
                        <span className="red-text">{formattedDate}, {formattedTime}</span>
                    </p>

                    <p>
                        <span className="black-text">Total Number of Players: </span>
                        <span className="red-text">{rows.length}</span>
                    </p>
                </section>

                {/* Passing addRow as a prop to Accordion */}
                <Accordion addRow={addRow}/>

                <section className="content3">
                    <table style={{width: "100%"}}>
                        <thead>
                        <tr>
                            <th style={{width: "80%"}}>Name</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* Rendering rows dynamically from the rows state */}
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td>{row.name}</td>
                                <td>
                                    <button id="remove-button" onClick={() => handleRemoveRow(index)}>
                                        <img className="bin-icon" alt="Logo" src="bin-icon.svg"/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
}
