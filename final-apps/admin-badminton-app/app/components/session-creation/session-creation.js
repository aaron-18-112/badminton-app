"use client";

import './session-creation.css';
import { useState } from "react";

export function SessionCreation() {
    // State to control the visibility of the panel
    const [isPanelVisible, setIsPanelVisible] = useState(false);

    // Function to toggle the panel visibility
    const togglePanel = () => {
        setIsPanelVisible(!isPanelVisible);
    };

    return (
        <div>
            <button
                className={`session-accordion ${isPanelVisible ? "active" : ""}`}
                onClick={togglePanel}
            >
                Create Session
            </button>
            <div className="panel" style={{display: isPanelVisible ? "block" : "none"}}>
                <label htmlFor="date-time">Enter Session Date & Time:</label><br/>
                <input type="datetime-local" id="date-time" name="date-time"/><br/>

                <label htmlFor="court-number1">Enter The First Court Number:</label><br/>
                <input type="number" id="court-number1" name="court-number1" min="1" max="4"/><br/>

                <label htmlFor="court-number2">Enter The Second Court Number:</label><br/>
                <input type="number" id="court-number2" name="court-number2" min="1" max="4"/><br/>
                <button className="submit-btn">Submit</button>

            </div>

        </div>
    );
}
