"use client";

import React, { useState } from 'react';
import '../globals.css';


export function Accordion({ addRow }) {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ fname: "", lname: "", email: "" });
    const [errors, setErrors] = useState({ fname: "", lname: "" });

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        // Clear any previous error messages when the user starts typing
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ""
        }));
    };

    const validate = () => {
        let valid = true;
        let errors = {};

        // Basic validation: check if fields are empty
        if (!formData.fname.trim()) {
            errors.fname = "First name is required";
            valid = false;
        } else if (!/^[a-zA-Z]+$/.test(formData.fname)) {
            errors.fname = "First name must contain only letters";
            valid = false;
        }

        if (!formData.lname.trim()) {
            errors.lname = "Last name is required";
            valid = false;
        } else if (!/^[a-zA-Z]+$/.test(formData.lname)) {
            errors.lname = "Last name must contain only letters";
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            const fullName = `${formData.fname} ${formData.lname}`;
            addRow(fullName);
            setFormData({ fname: "", lname: "", email: "" });
            setIsOpen(false);
        }
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
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="fname">First Name:</label><br/>
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            value={formData.fname}
                            onChange={handleChange}
                        />
                        {errors.fname && <p className="error-bubble">{errors.fname}</p>}
                        <br/>

                        <label htmlFor="lname">Last Name:</label><br/>
                        <input
                            type="text"
                            id="lname"
                            name="lname"
                            value={formData.lname}
                            onChange={handleChange}
                        />
                        {errors.lname && <p className="error-bubble">{errors.lname}</p>}
                        <br/>

                        <label htmlFor="email">Email Address:</label><br/>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        /><br/>

                        <input type="submit" id="submit" value="Submit" />
                    </form>
                </div>
            )}
        </section>
    );
}
