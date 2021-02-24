import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import navlogo from '../logo.svg';

export default class Navbar extends Component {
    render() {
        return (
            <NavbarWrapper className="navbar navbar-expand-sm navbar-light px-sm-1">

                <Link to='/'>
                    <img src={navlogo} className="navbar-brand ml-3"/>
                </Link>

                <ul className="navbar-nav align-items-center ml-auto">
                    <li className="nav-item ml-4"></li>
                    <Link to="/" className="nav-link">
                        <i className="fas fa-home"/>
                        Home
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
                    <a href="https://github.com/Joehall20" className="nav-link">
                        <i className="fab fa-github-square"/>
                        to the Code
                        </a>
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

