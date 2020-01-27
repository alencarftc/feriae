import React, { Component } from 'react';
import { Link } from 'gatsby';
import HamburgerMenu from "../hamburger-menu/index";
import "./style.scss";

class Navbar extends Component {
    state = { 
        isMenuOpen: false,
        siteTitle: "",
        links: [],
    }
    
    componentDidMount(){
        const { siteTitle, links } = this.props.props;

        this.setState({ siteTitle, links })
    }

    callme ($event) {
        //appear and hide menu
    }

    render() {
        const { siteTitle, links } = this.state;

        return (
            <header className="navbar">
                <nav className="navbar-inner">
                    <h1><Link className="link" to="/">{siteTitle}</Link></h1>
                    
                    {links && <ul className="link-list">
                        {links.map(link => (<li key={link.id}><Link to={link.href}>{link.title}</Link></li>))}
                    </ul>}

                    <button style={{ width: 0, height: 0, border: 0, background: 'none' }} onClick={this.callme}>
                        <HamburgerMenu></HamburgerMenu>
                    </button>
                </nav>
            </header>
        )
    } 
};

export default Navbar;