import React from 'react';
import styled from 'styled-components';
// import './Person.css';

// this returns a react component provided by a third party library.
// a tagged template literal syntax
const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center; 

    @media (min-width: 500px) {
        width: '450px'
    }
`;

// Person Component is a stateless/dumb/presentational Component - because it has no internal state management
const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick = {props.click}>I'm {props.name}. I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </StyledDiv>
    )
}

export default person;