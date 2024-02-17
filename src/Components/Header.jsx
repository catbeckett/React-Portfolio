import React from 'react';
import './Header.css'; // Import the CSS file for styling

function Header() {
    return (
        <header>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><a href="/">Home</a></li>
                    <li className="nav-item"><a href="/about">About</a></li>
                    <li className="nav-item"><a href="/projects">Projects</a></li>
                    <li className="nav-item"><a href="/contact">Contact</a></li>
                    {/* Add more navigation links as needed */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
