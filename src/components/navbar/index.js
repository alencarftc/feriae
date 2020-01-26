import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import "./style.scss";

const Navbar = ({siteTitle, links}) => {
    return (
        <header className="navbar">
            <nav className="navbar-inner">
                <h1><Link className="link" to="/">{siteTitle}</Link></h1>
                
                <ul className="link-list">
                    {links.map(link => (<li key={link.id}><Link to={link.href}>{link.title}</Link></li>))}
                </ul>
            </nav>
        </header>
    );    
};

Navbar.propTypes = {
    siteTitle: PropTypes.string, 
    links: PropTypes.arrayOf(PropTypes.object)
};

Navbar.defaultProps = {
    siteTitle: "",
    links: []
};

export default Navbar;