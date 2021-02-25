import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';

import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);
    // toggleBtnRef.current.click();

    console.log(authContext.authenticated);

    useEffect(() => {
        // this will render for every render cycle of the cockpit
        // when type, re-rendered app.js, state changes, it gets run
        console.log('[Cockpit.js] useEffect');
        // Http request ...
        // const timer = setTimeout(() => {
        //     alert('Save data to cloud!');
        // }, 1000);
        
        toggleBtnRef.current.click();

        return () => {
            // This makes sure it only runs after the component is rendered the first time
            // then cleans up when it's unmounted with the empty array
            // clearTimeout(timer); 
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []); // if array is empty, then it only exc when the component is destroyed
    // only execute when person is changed if the array contains persons array
    

    // runs on every update cycle with no argument when re-render
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    //let classes = ['red', 'bold'].join(' '); //use join to convert array to string
    let assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red'];
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold'];
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                ref={toggleBtnRef}
                className={btnClass} 
                onClick={props.clicked}>Toggle Persons
            </button>
            
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
}

export default React.memo(cockpit);
