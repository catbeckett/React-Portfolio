import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

function Header() {
    return (
        <header>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/">Home</Link></li> {/* Use Link instead of <a> */}
                    <li className="nav-item"><Link to="/Projects">Projects</Link></li> {/* Use Link instead of <a> */}
                    <li className="nav-item"><Link to="/Contact">Contact</Link></li> {/* Use Link instead of <a> */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
