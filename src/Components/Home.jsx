import React from 'react';
import catBeckettPhoto from '../assets/portfolioplacehoder.jpeg';

function Home() {
    return (
        <div>
            <h1>Cat Beckett</h1>
            <img src={catBeckettPhoto} alt="Cat Beckett" style={{ width: '200px', height: 'auto' }} />
            {/* Adjust the width and height values as needed */}
            <p>
            Welcome to my portfolio!
            </p>
            <p>
            London-based Digital Product Manager with 8 years of experience in crafting and managing 
            </p>
            <p>
            digital solutions for the arts and cultural sector, merging content production skills with proficiency 
            </p>
            <p> 
            in front-end web development to lead impactful projects and elevate cultural engagement.
            </p>

        </div>
    );
}

export default Home;
