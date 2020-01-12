import React, { Component } from 'react';
import {
    Nav, Navbar, NavbarToggler, Collapse, NavItem, NavLink
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink>
                                        <span className="fa fa-home fa-lg"> Home </span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <span className="fa fa-info fa-lg"> About Us </span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <span className="fa fa-address-card fa-lg"> Contact Us </span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;