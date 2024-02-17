import React from 'react';
import catBeckettPhoto from '../assets/portfolioplacehoder.jpeg';
import ProjectGallery from './ProjectGallery'; // Import the ProjectGallery component

function Home() {
    return (
        <div>
            <h1>Cat Beckett</h1>
            <img src={catBeckettPhoto} alt="Cat Beckett" />
            <p>
                Welcome to my portfolio! Here you can find information about me and my projects.
            </p>
            <ul>
                <li><a href="https://github.com/catbeckett">GitHub Profile</a></li>
                <li><a href="https:www.linkedin.com/in/catherinebeckett11">LinkedIn Page</a></li>
                <li>Email: catejb89@gmail.com</li>
                <li><a href="link-to-your-resume-pdf">PDF version of my resume</a></li>
            </ul>
            {/* Render the ProjectGallery component */}
            <ProjectGallery />
        </div>
    );
}

export default Home;
