import React from 'react';
import catBeckettPhoto from '../assets/portfolioplacehoder.jpeg';
import ProjectGallery from './ProjectGallery';
import Resume from './Resume'; // Import the Resume component

function Home() {
    return (
        <div>
            <h1>Cat Beckett</h1>
            <img src={catBeckettPhoto} alt="Cat Beckett" style={{ width: '200px', height: 'auto' }} />
            {/* Adjust the width and height values as needed */}
            <p>
                Welcome to my portfolio! Here you can find information about me and my projects.
            </p>
            <p>
                As a London-based Digital Product Manager, I bring 8 years of experience in crafting and managing digital solutions for the arts and cultural sector.
            </p>
            <p>
                I merge content production skills with proficiency in front-end web development to lead impactful projects.
            </p>
            <p> 
                My strength lies in strategic project management, fostering collaboration, and delivering innovative digital experiences that elevate cultural engagement.
            </p>
            <ul>
                <li><a href="https://github.com/catbeckett">GitHub Profile</a></li>
                <li><a href="https://www.linkedin.com/in/catherinebeckett11">LinkedIn Page</a></li>
                <li>Email: catejb89@gmail.com</li>
                <li><a href="https://drive.google.com/file/d/1U3m45sVzXdq--fsc7Q0hcDZH4u5fFWow/view?usp=drive_link">PDF version of my resume</a></li> {/* Replace with the actual URL */}
            </ul>
            {/* Render the ProjectGallery component */}
            <ProjectGallery />
            {/* Render the Resume component */}
            <Resume />
        </div>
    );
}

export default Home;
