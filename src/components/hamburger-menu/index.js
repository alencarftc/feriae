import React, { Component } from 'react';
import './style.scss';

class HamburgerMenu extends Component {
    state = { isOpen: false }

    toggleMenu = () => {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen })
    }

    render(){
        return (
            <button onClick={this.toggleMenu} className="hamburger-icon">
                <span className="line"></span>
            </button>
        );
    }
}
export default HamburgerMenu;