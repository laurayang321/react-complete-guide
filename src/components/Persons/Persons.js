import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  
  // 1.
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  // 2. runs when state changes like onChange event
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  // 4. runs when state changes like onChange event
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    // snapshot is a data package, will then receive in componentDidUpdate
    // so that you can save some state right before update 
    return { message: 'Snapshot!' };
  }

  // componentWillUpdate() {
  // }

  // 5. runs when state changes like onChange event
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  // 3.
  render() {
    console.log('[Persons.js] rendering...');

    return this.props.persons.map( (person, index ) => {

      return (
        <Person
          click = {() => this.props.clicked( index )}
          name={person.name} 
          age={person.age} 
          key={person.id}
          changed={( event ) => this.props.changed(event, person.id)} 
        />
      );

    });
    
  }

}

export default Persons;