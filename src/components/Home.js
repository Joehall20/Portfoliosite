import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="bg-image" >
                <img src="img/background.jpg" />
                    <div className="container-fluid">
                        <div className="center">
                            <h1 className="title">Hi!</h1>
                                <h1 className="title">I'm Joe</h1>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <span className="right">
                            I enjoy a challenge and the sense of accomplishment when a solution is found. I am also creative and work on commissions of both art pieces and movie and game props. I am currently looking for a positon in which I can learn and expand my skills with both older and up and coming technologies.
                        </span>
                    </div>
            </div>
        )
    }
}
