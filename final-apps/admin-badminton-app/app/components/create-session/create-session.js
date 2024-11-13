"use client";

import './create-session.css';
import React, { useState } from 'react';

export function CreateSession() {
    const [isOpen, setIsOpen] = useState(false);
    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false); // State to trigger table update

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const getMinDateTime = () => {
        const now = new Date();
        return now.toISOString().slice(0, 16);
    };

    const validateForm = (formData) => {
        const newErrors = {};
        const sessionDate = formData.get('session-date');
        const court1Number = formData.get('court1-number');

        if (!sessionDate) {
            newErrors.sessionDate = 'Session Date & Time is required.';
        }
        if (!court1Number) {
            newErrors.court1Number = 'Court 1 Number is required.';
        } else if (court1Number < 1 || court1Number > 4) {
            newErrors.court1Number = 'Court 1 Number must be between 1 and 4.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        if (validateForm(formData)) {
            const sessionDate = formData.get('session-date');
            const court1Number = formData.get('court1-number');
            const court2Number = formData.get('court2-number') || "N/A";

            // Store the data in localStorage
            const storedSessions = JSON.parse(localStorage.getItem('sessions')) || [];
            storedSessions.push({ sessionDate, court1Number, court2Number });
            localStorage.setItem('sessions', JSON.stringify(storedSessions));

            setFormSubmitted(!formSubmitted); // Toggle to inform the PaymentHistory component to re-render

            console.log("Session Saved:", { sessionDate, court1Number, court2Number });
        }
    };

    return (
        <section className="accordion">
            <button
                className="create-session"
                onClick={toggleAccordion}
                aria-expanded={isOpen}
            >Create Session
            </button>

            {isOpen && (
                <div className="accordion-content">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="session-date">Session Date & Time:</label><br/>
                        <input
                            type="datetime-local"
                            id="session-date"
                            name="session-date"
                            min={getMinDateTime()}
                        /><br/>

                        {errors.sessionDate && <div className="alert alert-danger">{errors.sessionDate}</div>}

                        <label htmlFor="court1-number">Court 1 Number:</label><br/>
                        <input
                            type="number"
                            id="court1-number"
                            name="court1-number"
                            min="1"
                            max="4"
                        /><br/>

                        {errors.court1Number && <div className="alert alert-danger">{errors.court1Number}</div>}

                        <label htmlFor="court2-number">Court 2 Number (Optional):</label><br/>
                        <input
                            type="number"
                            id="court2-number"
                            name="court2-number"
                            min="1"
                            max="4"
                        /><br/>

                        <button
                            type="submit"
                            value="Submit"
                            id="submit"
                        >Submit
                        </button>
                    </form>
                </div>
            )}
        </section>
    );
}
