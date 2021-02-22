import React, { Component } from 'react'
import styled from 'styled-components';

export default class Footer extends Component {
    render() {
        return (
            <FooterWrap>
                <footer>
                    <div className="socials-footer">
                        <div className="socials-icons">
                            <a href="https://github.com/Joehall20"><i className="fab fa-github-square"></i></a>
                            <a href="mailto:TheBrushWarrior@hotmail.com"><i className="fas fa-envelope-square"></i></a>
                        </div>
                    </div>
                </footer>
            </FooterWrap>
        )
    }
}
const FooterWrap = styled.nav`
    background: var(--mainNav);
    
    .nav-link{
        color: var(--mainWhite);
        font-size: 2rem;
        text-transform: capitalize;
    }
`;
