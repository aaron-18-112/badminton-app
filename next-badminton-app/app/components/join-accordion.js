"use client";

import React, {useState} from 'react';
import '../globals.css';

export function Accordion() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="accordion">
            <button
                className="join"
                id="join"
                onClick={toggleAccordion}
                aria-expanded={isOpen}
            >
                Join
            </button>

            {isOpen && (
                <div className="accordion-content">
                    <form>
                        <label htmlFor="fname">First Name:</label><br/>
                        <input type="text" id="fname" name="fname"/><br/>

                        <label htmlFor="lname">Last Name:</label><br/>
                        <input type="text" id="lname" name="lname"/><br/>

                        <label htmlFor="email">Email Address:</label><br/>
                        <input type="text" id="email" name="email"/><br/>

                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            )}
        </section>
    );
}
