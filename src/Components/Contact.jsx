import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Add your form submission logic here, such as sending the form data to a backend server
        
        console.log(formData); // For demonstration, log the form data to the console
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="contactPage">
            <h1>Contact Me</h1>
            <div className="contactInfo">
                <h2>Contact Information</h2>
                <p>Email: example@example.com</p>
                <p>Phone: +1234567890</p>
                {/* Add any other contact information here */}
            </div>
            <div className="contactForm">
                <h2>Contact Form</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
