// Contact.jsx
// Import React and necessary dependencies
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Import Axios
import { Link } from 'react-router-dom'; // Import Link from React Router
import './ContactForm.css'; // Import the CSS file for styling

// Define the Contact component
function Contact() {
  // Initialize useForm hook
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/api/contact', data); // Use Axios to make POST request

      if (response.status === 200) {
        console.log('Form submitted successfully!');
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  // Return JSX for Contact component
  return (
    <div className="contactPage">
      <div className="text-container">
        <h1>Contact Me</h1>
        <div className="contactInfo">
          <ul>
            <li><a href="https://github.com/catbeckett">GitHub Profile</a></li>
            <li><a href="https://www.linkedin.com/in/catherinebeckett11">LinkedIn Page</a></li>
            <li>Email: catejb89@gmail.com</li>
            {/* Replace the existing resume link with the new Link component */}
            <li><Link to="https://drive.google.com/file/d/1U3m45sVzXdq--fsc7Q0hcDZH4u5fFWow/view?usp=drive_link">PDF version of my resume</Link></li>
          </ul>
        </div>
        <div className="contactForm">
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" {...register("name", { required: true })} />
            {errors.name && <span className="error">Name is required</span>}
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...register("email", { required: true })} />
            {errors.email && <span className="error">Email is required</span>}

            <label htmlFor="message">Message:</label>
            <textarea id="message" {...register("message", { required: true })}></textarea>
            {errors.message && <span className="error">Message is required</span>}
            
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Export the Contact component
export default Contact;
