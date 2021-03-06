import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

import AuthContext from '../../../context/auth-context';

// Person Component is a stateless/dumb/presentational Component - because it has no internal state management
class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    // it must be static and named by contextType
    // it can be accessed from outside class without instantiate
    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}

                <p key='i1' onClick = {this.props.click}>
                    I'm {this.props.name}. I'm {this.props.age} years old.
                </p>
                <p key='i2'>{this.props.children}</p>
                <input 
                    key='i3'
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref = {this.inputElementRef}
                    type='text' 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />
            </Aux>
        );
    }
}

// note: propTypes has to be lowercase
// propTypes is a special property which you add to any Javascript object or any Javscript component object
// that React will watch out for in development mode and give you a warning if pass in incorrect props

// set up key value pairs: key is prop names; value is prop types
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);