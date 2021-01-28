import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; // js extension can be ommitted due to the build workflow

// App Component is a stateful Component
// Either Class based with state or Functional based with useState are called smart Component or container Component because they contain the state or your application
class App extends Component {
  // Use Destructuring to pull out the current state and setState function definition
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'Some other value',
    showPersons: false
  }

 switchNameHandler = (newName) => {
    console.log("Switch Name button clicked.");
    // DON't DO THIS: this.state.persons[0].name = "Maximumilian";
    // setState is only available in class-based Component

    // no this keyword needed here to reference inside class
    // Note: React Hooks doesn't merge new state with the old state
    this.setState( {
        persons: [
          {name: newName, age: 28},
          {name: 'Manu', age: 29},
          {name: 'Stephanie', age: 27}
        ]
    })
  }

 nameChangedHandler = (event) => {
  this.setState( {
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 27}
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // the setState is merged with the old states in class-based Component setState
    this.setState( {showPersons: !doesShow} );
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      // if the condition is true: assign persons var to some JSX code
      persons = (
        <div >
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person  
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
  // the lowercase is reserved for native HTML in JSX like div, so components usually use uppercase. 
}

export default App;



