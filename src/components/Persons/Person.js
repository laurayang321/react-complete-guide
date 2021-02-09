import React from 'react';
import classes from './Person.css';

// Person Component is a stateless/dumb/presentational Component - because it has no internal state management
const person = (props) => {

    const rnd = Math.random();
    if (rnd > 0.7) {
        throw new Error(' Something went wrong');
    }

    return (
        <div className={classes.Person}>
            <p onClick = {props.click}>
                I'm {props.name}. I'm {props.age} years old.
            </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person;