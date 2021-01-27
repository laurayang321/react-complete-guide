import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'; // js extension can be ommitted due to the build workflow

const app = props => {
  return (
    <div className="App">
      <h1>Hi, I'm a React App.</h1>
      <p>This is really working!</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person> 
    </div>
  );
  // the lowercase is reserved for native HTML in JSX like div, so components usually use uppercase. 
  
}

export default app;


state = {
  persons: [
    {name: 'Max', age: 28},
    {name: 'Manu', age: 29},
    {name: 'Stephanie', age: 26}
  ],
  otherState: 'some other value'
}

switchNameHandler = () => {
  console.log("Switch Name button clicked.");
  // DON't DO THIS: this.state.persons[0].name = "Maximumilian";
  // setState is only available in class-based Component
  this.setState( {
      persons: [
        {name: 'Maximumilian', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ]
  })
}
