import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons'; // js extension can be ommitted due to the build workflow
import Cockpit from '../components/Cockpit/Cockpit';

import WithClass from '../hoc/WithClass';


// App Component is a stateful Component
// Either Class based with state or Functional based with useState are called smart Component or container Component because they contain the state or your application
class App extends Component {

  // 1.
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }  

  state = {
    persons: [
      { id: 'abc1', name: 'Max', age: 28 },
      { id: 'abc2', name: 'Manu', age: 29 },
      { id: 'abc3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'Some other value',
    showPersons: false,
    showCockpit: true
  }

  // 2.
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  // 4. fetching new data from a server 
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  // 3. can be used for performance improvements
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  // 5. fetching new data from a server 
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

  // 4. 
  render() {

    console.log('[App.js] render');
    let persons = null;

    if ( this.state.showPersons ) {
      // if the condition is true: assign persons var to some JSX code
      persons = (
        <Persons
          persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <WithClass classes={classes.App}>
        <button 
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
            Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit 
            title={this.props.appTitle}
            showPersons = {this.state.showPersons}
            personsLength = {this.state.persons.length}
            clicked = {this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </WithClass>
    );
  }
}

export default App; 


