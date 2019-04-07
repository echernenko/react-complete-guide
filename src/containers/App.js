import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import './App.css';
 
class App extends Component {

  state = {
    persons: [
      {id: 1, name: 'Max', age: 29},
      {id: 2, name: 'Manu', age: 28},
      {id: 3, name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;
    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    if (this.state.showPersons) {
      persons = (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.switchNameHandler} />
      );
      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <Cockpit 
          style={style}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;