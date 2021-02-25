import React from 'react';

// React create context allows us to initialize our context with a default value
// context: is a globally available Javascript object
// it can be passed across component without using props
const authContext = React.createContext({
    // the default value will apply when you don't set up any value
    authenticated: false, 
    login: () => {} // empty anonymous function
});

// it should wrap all the parts of your application that needs to access to this context
export default authContext;