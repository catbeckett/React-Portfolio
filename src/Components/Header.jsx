import React from 'react';
import './Header.css'; // Import the CSS file for styling

function Header() {
    return (
        <header>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><a href="/">Home</a></li>
                    <li className="nav-item"><a href="Project.jsx">Projects</a></li>
                    <li className="nav-item"><a href="Contact.jsx">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
