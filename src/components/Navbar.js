import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <NavbarWrapper className="navbar navbar-expand-sm px-sm-1 ml-auto">
                <ul className="navbar-nav align-items-center ml-auto">
                    <li className="nav-item ml-4"></li>
                    <Link to="/" className="nav-link">
                        <i className="fas fa-archive"/>
                        home
                    </Link>
                </ul>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-4"></li>
                    <Link to="/portfolio" className="nav-link">
                        <i className="fas fa-archive"/>
                        portfolio
                    </Link>
                </ul>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-4"></li>
                    <Link to="/code" className="nav-link">
                        <i className="fab fa-github-square"/>
                        to the Code
                    </Link>
                </ul>        
            </NavbarWrapper>
            
        )
    }
}

const NavbarWrapper = styled.nav`

    background: var(--navColour);
    
    
    .nav-link{
        color: var(--mainDark);
        font-size: 1.8rem;
    }

`;

