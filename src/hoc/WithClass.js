import React from 'react';

// WrappedComponent: a reference to component
// withClass is not a component anymore
// it is a function which returns a component function
const withClass = (WrappedComponent, className) => {
    // return a component function

    // To get back the data:
    // Use Spread operator to pull out all the properties 
    // that are inside of this props object and distributes 
    // that are new key-value pairs on this wrapped componet.
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
};

export default withClass;