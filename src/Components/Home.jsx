// Home.jsx
import React from 'react';
import catBeckettPhoto from '/public/cbhs.png';

function Home() {
    return (
        <div className="text-container">
            <p>
            Welcome to my portfolio!
           </p>
            <h1>Cat Beckett</h1>
            <img src={catBeckettPhoto} alt="Cat Beckett" style={{ width: '200px', height: 'auto' }} />
            <p>
            Fostering innovation in the cultural sector by harmoniously
            </p>
            <p>
            blending creative content production with digital solutions.
            </p>


        </div>
    );
}

export default Home;
