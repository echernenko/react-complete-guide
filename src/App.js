import React, { Component } from 'react';
import Person from './Person/Person';
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

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age} 
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.switchNameHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
