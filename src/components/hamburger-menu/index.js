import React from 'react';
import './style.scss';

const HamburgerMenu = ({ isOpen }) => (
    <button className={isOpen ? "open hamburger-icon" : "hamburger-icon"}>
        <span className="line"></span>
    </button>
);
export default HamburgerMenu;