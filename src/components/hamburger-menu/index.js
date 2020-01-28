import React from 'react';
import './style.scss';

const HamburgerMenu = ({ isOpen }) => (
    <button className={isOpen ? "open hamburger-icon" : "hamburger-icon"}>
        {console.log(isOpen)}
        <span className="line"></span>
    </button>
);
export default HamburgerMenu;