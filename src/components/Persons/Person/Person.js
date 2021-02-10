import React, { Component } from 'react';
import classes from './Person.css';

// Person Component is a stateless/dumb/presentational Component - because it has no internal state management
class Person extends Component {

    render() {

        console.log('[Person.js] rendering...');

        return (
            <div className={classes.Person}>
                <p onClick = {this.props.click}>
                    I'm {this.props.name}. I'm {this.props.age} years old.
                </p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name}></input>
            </div>
        );
    }

}

export default Person;