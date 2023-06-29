import React from "react";

const Hello = () => {
    return (
        <div className='helloClass'>
            <h1>Hello there using JSX Code</h1>
        </div>
    )

    // return React.createElement('div', { id: 'hello', className: 'helloClass' }, React.createElement('h1', null, 'Hello there without using JSX'));
}

export default Hello