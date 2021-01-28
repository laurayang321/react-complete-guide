import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'; // js extension can be ommitted due to the build workflow

// App Component is a stateful Component
// Either Class based with state or Functional based with useState are called smart Component or container Component because they contain the state or your application
const app = props => {
  // Use Destructuring to pull out the current state and setState function definition
  const [ personsState, setPersonsState ] = useState ({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  });

  // avoid the lost of otherState, so need to define otherState here
  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    console.log("Switch Name button clicked.");
    // DON't DO THIS: this.state.persons[0].name = "Maximumilian";
    // setState is only available in class-based Component

    // no this keyword needed here to reference inside class
    // Note: React Hooks doesn't merge new state with the old state
    setPersonsState( {
        persons: [
          {name: newName, age: 28},
          {name: 'Manu', age: 29},
          {name: 'Stephanie', age: 27}
        ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App.</h1>
      <p>This is really working!</p>
      <button onClick={ () => switchNameHandler('Maximumilian!!') }>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} />
      <Person  
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, 'Max!')}>My Hobbies: Racing</Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} />
    </div>
  );
  // the lowercase is reserved for native HTML in JSX like div, so components usually use uppercase. 
}

export default app;



