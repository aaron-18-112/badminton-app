"use client";

import React, {useState} from 'react';
import '../globals.css';

export function Accordion({addRow}) {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({fname: "", lname: ""});


    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullName = `${formData.fname} ${formData.lname}`;
        addRow(fullName);
        setFormData({fname: "", lname: "", email: ""});
        setIsOpen(false);
    };

    return (
        <section className="accordion">
            <button
                className="join"
                id="join"
                onClick={toggleAccordion}
                aria-expanded={isOpen}
            >Join
            </button>

            {isOpen && (
                <div className="accordion-content">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="fname">First Name:</label><br/>
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            value={formData.fname}
                            onChange={handleChange}
                        /><br/>

                        <label htmlFor="lname">Last Name:</label><br/>
                        <input
                            type="text"
                            id="lname"
                            name="lname"
                            value={formData.lname}
                            onChange={handleChange}
                        /><br/>

                        <label htmlFor="email">Email Address:</label><br/>
                        <input type="email"
                               id="email"
                               name="email"
                        /><br/>

                        <input type="submit"
                               id="submit"
                               value="Submit"
                        />
                    </form>
                </div>
            )}
        </section>
    );
}
