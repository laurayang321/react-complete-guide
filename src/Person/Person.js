import React from 'react';
import './Person.css';

// Person Component is a stateless/dumb/presentational Component - because it has no internal state management
const person = (props) => {
    // if screen > 500px: Person div stay as 450px width
    // if screen < 500px: Person div stay as 60% of screen width
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick = {props.click}>I'm {props.name}. I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person;