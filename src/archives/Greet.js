import React from "react";

// function Greet() {
//     return <h1>Hello Harsh Raj</h1>
// }

const Greet = props => {
    const { name, coding, children } = props;
    return (
        <div>
            <h1>Hello {name} a.k.a {coding}</h1>
            <p>{children}</p>
        </div>
    )
}

export default Greet;