import React from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css'; // Import the CSS file for styling

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="contactPage">
      <h1>Contact Me</h1>
      <div className="contactInfo">
        <ul>
          <li><a href="https://github.com/catbeckett">GitHub Profile</a></li>
          <li><a href="https://www.linkedin.com/in/catherinebeckett11">LinkedIn Page</a></li>
          <li>Email: catejb89@gmail.com</li>
          <li><a href="https://drive.google.com/file/d/1U3m45sVzXdq--fsc7Q0hcDZH4u5fFWow/view?usp=drive_link">PDF version of my resume</a></li>
        </ul>
      </div>
      <div className="contactForm">
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" {...register("name", { required: true })} />
          {errors.name && <span>Name is required</span>}
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register("email", { required: true })} />
          {errors.email && <span>Email is required</span>}

          <label htmlFor="message">Message:</label>
          <textarea id="message" {...register("message", { required: true })}></textarea>
          {errors.message && <span>Message is required</span>}
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
