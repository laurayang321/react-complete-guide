import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  
  // 1.
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  // 2. runs when state changes like onChange event
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   // persons array is object and is copied by pointer, so here is comparing pointers
  //   // this works because when person is updated, we updated by deep copy by Rest operator
  //   if (nextProps.persons !== this.props.persons 
  //     || nextProps.changed !== this.props.changed
  //     || nextProps.clicked !== this.props.clicked) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   // return true;
  // }

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

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
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