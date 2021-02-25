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
                        I enjoy the challenges of programming and design. I have spent the last few years honing my programming and artistic skills using a wide array of software and languages. I like to understand how things work and I enjoy the sense of achievement when I can say “I created that”. As such in a world where technology is so prominent, my skills and passion have guided me towards programming. I have used these skills in previous positions as SaaS Implementation Consultant, as well as in C# Game development and Mobile Platform Engineering. I also enjoy Website design and development as well as fine tuning my artistic skills in my free time.
                        </span>
                    </div>
            </div>
        )
    }
}
