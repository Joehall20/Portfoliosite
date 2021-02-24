import React, { Component } from 'react'
import { ButtonStyled } from './Button'

export default class Portfolio extends Component {
    render() {
        return (
            <div className="bg-image">
            <img src="img/background.jpg"/>
            <div className="mx-auto p-5">
                    <div className="port-contain">
                            <h1 className="title">Portfolio Website</h1>
                            <p className="body">
                                You're currently here! Portfolio site created to display my projects
                            </p>
                                <ButtonStyled>
                                    Live Site
                                </ButtonStyled>
                                <ButtonStyled>
                                    github
                                </ButtonStyled>
                            </div>
                            </div>
                        <div className="mx-auto pb-5 px-5">
                            <div className="port-contain">
                            <h1 className="title">Art website</h1>
                                <ButtonStyled onClick={()=>{this.href="joehall20.github.io"}}>                                
                                    Live Site
                                </ButtonStyled>
                                <ButtonStyled>
                                    github
                                </ButtonStyled>
                            </div>
                        </div>
                </div>
        )
    }
}