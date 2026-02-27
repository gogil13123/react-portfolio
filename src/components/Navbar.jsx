import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={isOpen ? 'nav-open' : ''}>
            <div className="nav-logo">N<span>.</span>U</div>

            <div className={`nav-links-wrapper ${isOpen ? 'active' : ''}`}>
                <ul className="nav-links">
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#work" onClick={closeMenu}>Work</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
                <a href="#contact" className="nav-cta-mobile" onClick={closeMenu}>Hire Me</a>
            </div>

            <div className="nav-right">
                <a href="#contact" className="nav-cta">Hire Me</a>
                <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
