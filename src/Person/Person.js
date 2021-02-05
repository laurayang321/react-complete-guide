import React from 'react';
import Radium from 'radium';
import './Person.css';

// Person Component is a stateless/dumb/presentational Component - because it has no internal state management
const person = (props) => {
    return (
        <div className="Person">
            <p onClick = {props.click}>I'm {props.name}. I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default Radium(person);