import React, { Component } from 'react'
import { ButtonStyled } from './Button'

export default class Portfolio extends Component {
    render() {
        return (
            <div className="bg-image">
            <img src="img/background.jpg"/>
                        {/*Portfolio Coding Website*/}
                        <div className="mx-auto p-5">
                            <div className="port-contain">
                            <h1 className="cont-title">Coding Portfolio Website</h1>
                            <p className="body">
                                You're currently here! This portfolio site created to display my projects created using React, StyledComponents and the practices I learnt on my other websites 
                            </p>
                            <a href="https://joehallportfolio.netlify.app/">
                                <ButtonStyled>
                                    Live Site
                                </ButtonStyled>
                            </a>
                            <a href="https://github.com/Joehall20/Portfoliosite">
                                <ButtonStyled>
                                    github
                                </ButtonStyled>
                            </a>
                            </div>
                            </div>
                        {/*E-commerce Store*/}
                        <div className="mx-auto pb-5 px-5">
                            <div className="port-contain">
                            <h1 className="cont-title">E-Commerce store</h1>
                                <p className="body">
                                    E-commerce store using React with PayPal Functionality (Currently Sandbox)
                                </p>
                                <a href="https://github.com/Joehall20/react-ecommerce-store">
                                    <ButtonStyled>                                
                                        Live Site
                                    </ButtonStyled>
                                </a>
                                <a href="https://travellingtrooper.netlify.app/">
                                <ButtonStyled>
                                    github
                                </ButtonStyled>
                                </a>
                            </div>
                        </div>
                        {/*Art Portfolio Website*/}
                        <div className="mx-auto pb-5 px-5">
                            <div className="port-contain">
                            <h1 className="cont-title">Art Portfolio website</h1>
                                <p className="body">
                                    First Portfolio website for showing my artworks. Made using mostly HTML and CSS with minor JavaScript for Parallaxing
                                </p>
                                <a href="https://joehall20.github.io/">
                                    <ButtonStyled>                                
                                        Live Site
                                    </ButtonStyled>
                                </a>
                                <a href="https://github.com/Joehall20/joehall20.github.io">
                                <ButtonStyled>
                                    github
                                </ButtonStyled>
                                </a>
                            </div>
                        </div>
                        {/*Random Cave Generator*/}
                        <div className="mx-auto pb-5 px-5">
                            <div className="port-contain">
                            <h1 className="cont-title">Cave Generator</h1>
                                <p className="body">
                                    Random cave generator built for my final project at University, for this generator I used Perlin Noise maps to create a system that will create life like 2D cave layouts.
                                </p>
                                <a href="https://github.com/Joehall20/Cavegenerator">
                                <ButtonStyled>
                                    github
                                </ButtonStyled>
                                </a>
                            </div>
                        </div>
                        {/*DeadNought Game*/}
                        <div className="mx-auto pb-5 px-5">
                            <div className="port-contain">
                            <h1 className="cont-title">DeadNought Android Game</h1>
                                <p className="body">
                                    Rogue-like game created for a Gameboy GameJam as part of a 4-man team which we later took to an event called "The Big Pitch" in which teams competed for potential funding for a project. I myself worked on the Art assets and the random generation of rooms.
                                </p>
                                <a href="https://shatteredpixel.itch.io/deadnought">
                                <ButtonStyled>
                                    Live Site
                                </ButtonStyled>
                                </a>
                            </div>
                        </div>


                </div>
        )
    }
}