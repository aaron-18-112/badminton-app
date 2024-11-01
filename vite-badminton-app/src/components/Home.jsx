import React from 'react';
import '/Users/hhaide/RiderProjects/badminton-app/vite-badminton-app/src/assets/logo-SVG.svg';
import logo from '/logo-SVG.svg';

export default function Home() {
    return (
        <div>
            <header className="svg-container">
                <img alt="Logo" src={logo} width={100} height={100} />
            </header>

            <nav className="button-container">
                <button aria-label="Numbers" id="numbers">Numbers</button>
                <button aria-label="Payment" id="payment">Payment</button>
                <button aria-label="Admin" id="admin">Admin</button>
            </nav>
        </div>
    );
}
