import React from 'react';

// WrappedComponent: a reference to component
// withClass is not a component anymore
// it is a function which returns a component function
const withClass = (WrappedComponent, className) => {
    // return a component function
    return props => (
        <div className={className}>
            <WrappedComponent />
        </div>
    );
};

export default withClass;