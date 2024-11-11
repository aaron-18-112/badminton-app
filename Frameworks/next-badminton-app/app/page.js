"use client";

import './globals.css';


import { useEffect, useState } from "react";
import { HamburgerMenu } from "@/app/components/hamburger-menu";
import { Accordion } from "@/app/components/accordion";
import ThemeSwitcher from "@/app/components/switch/theme-switcher";
import { ThemeProvider, useTheme } from "next-themes";  // Import ThemeProvider and useTheme hook

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [date, setDate] = useState(null);
    const [rows, setRows] = useState([]);
    const { theme } = useTheme();  // Get the current theme (light or dark)

    useEffect(() => {
        const d = new Date(2024, 10, 12, 17, 0);
        setDate(d);
    }, []);

    const formattedDate = date
        ? date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })
        : 'Loading...';


    const formattedTime = date
        ? `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
        : '';

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const addRow = (fullName) => {
        setRows((prevRows) => [...prevRows, { name: fullName }]);
    };

    const handleRemoveRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };

    // Conditionally set the logo based on the theme (dark or light)
    const logoSrc = theme === 'dark' ? './dark-mode-logo.svg' : './logo-SVG.svg';

    return (
        <ThemeProvider attribute="data-theme"> {/* Wrap the Home component with ThemeProvider */}
            <div className="page">
                <div className="sidebar">
                    <img className="svg-container" alt="Logo" src={logoSrc} /> {/* Use the dynamic logo source */}
                    <nav className="button-container">
                        <button aria-label="Numbers" id="numbers">Numbers</button>
                        <button aria-label="Payment" id="payment">Payment</button>
                        <button aria-label="Admin" id="admin">Admin</button>
                    </nav>
                </div>

                <HamburgerMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
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

                    <Accordion addRow={addRow} />

                    <section className="content3">
                        <table style={{ width: "100%" }}>
                            <thead>
                            <tr>
                                <th style={{ width: "80%" }}>Name</th>
                                <th>Remove</th>
                            </tr>
                            </thead>
                            <tbody>
                            {rows.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.name}</td>
                                    <td>
                                        <button
                                            id="remove-button"
                                            onClick={() => handleRemoveRow(index)}
                                            aria-label={`Remove ${row.name}`}
                                        >
                                            <img className="bin-icon" alt="Remove" src="bin-icon.svg" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </section>
                </div>
                <ThemeSwitcher />
            </div>
        </ThemeProvider>
    );
}
