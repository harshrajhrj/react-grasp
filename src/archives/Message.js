import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeState() {
        this.setState({
            message: 'Thank you for visiting!'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeState()}>Visit</button>
            </div>
        )
    }
}

export default Message


/**
 * setState method helps to change the current state that is declared within the constructor
 */