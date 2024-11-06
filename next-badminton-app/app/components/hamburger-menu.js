"use client";

import {useState} from "react";
import '../globals.css';

export function HamburgerMenu({toggleMenu, menuOpen}) {

    return (
        <div className={`hamburger-menu ${menuOpen ? 'menu-open' : ''}`}>
            {/* Hamburger icon */}
            <img className="svg-container" alt="Logo" src="logo-SVG.svg"/>
            <button className="icon" id="menu-button" onClick={toggleMenu} aria-label="Toggle Menu">
                <img alt='Menu' src="hamburger-icon.svg"/>
            </button>

            {/* Sidebar */}
            <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
                <nav className="button-container">
                    <button aria-label="Numbers" id="numbers">Numbers</button>
                    <button aria-label="Payment" id="payment">Payment</button>
                    <button aria-label="Admin" id="admin">Admin</button>
                </nav>
            </div>
        </div>
    )
}
