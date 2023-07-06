import React, { Component } from "react";

class Welcome extends Component {
    render() {
        const { name, coding, children } = this.props;

        // using state component
        // const {state1, state2} = this.state;
        return (
            <div>
                <h1>Welcome to class component {name} a.k.a {coding}</h1>
                <p>{children}</p>
            </div>
        )
    }
}

export default Welcome