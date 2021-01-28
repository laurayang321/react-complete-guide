import React from 'react';

// Person Component is a stateless/dumb/presentational Component - because it has no internal state management
const person = (props) => {
    return (
        <div>
            <p>I'm {props.name}. I'm {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;