import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person'; // js extension can be ommitted due to the build workflow
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

// App Component is a stateful Component
// Either Class based with state or Functional based with useState are called smart Component or container Component because they contain the state or your application
class App extends Component {
  // Use Destructuring to pull out the current state and setState function definition
  state = {
    persons: [
      { id: 'abc1', name: 'Max', age: 28 },
      { id: 'abc2', name: 'Manu', age: 29 },
      { id: 'abc3', name: 'Stephanie', age: 26 }
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

 nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // person is a pointer object, need Spread Operator to create a JavaScript object
    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // the setState is merged with the old states in class-based Component setState
    this.setState( {showPersons: !doesShow} );
  }

  deletePersonHandler = (personIndex) => {
    // slice copies the full array
    // const persons = this.state.persons.slice();

    // ES6 syntax of Spread operator
    // Should always update state with an immutable way without mutating the original state.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    let persons = null;
    let btnClass = '';

    if ( this.state.showPersons ) {
      // if the condition is true: assign persons var to some JSX code
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
              return 
              <ErrorBoundary key={person.id}> 
              <Person
                click = {() => this.deletePersonHandler( index )}
                name={person.name} 
                age={person.age} 
                changed={( event ) => this.nameChangedHandler(event, person.id)} />
            </ErrorBoundary>
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      btnClass = classes.Red;
    }

    //let classes = ['red', 'bold'].join(' '); //use join to convert array to string
    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red'];
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold'];
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App.</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button className={btnClass} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
    );
  }
  // the lowercase is reserved for native HTML in JSX like div, so components usually use uppercase. 
}

// this is called a higher order Component
export default App; 


