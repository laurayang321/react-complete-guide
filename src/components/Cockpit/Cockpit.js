import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(() => {
        // this will render for every render cycle of the cockpit
        // when type, re-rendered app.js, state changes, it gets run
        console.log('[Cockpit.js] useEffect');
        // Http request ...
        setTimeout(() => {
            alert('Save data to cloud!');
        }, 1000);
    }, [props.persons]); // only execute when person is changed
    // if array is empty, then it only exc once like componentDidMount

    // useEffect can be used multiple times
    // useEffect();

    //let classes = ['red', 'bold'].join(' '); //use join to convert array to string
    let assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red'];
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold'];
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                className={btnClass} 
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;