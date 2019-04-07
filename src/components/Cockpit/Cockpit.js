import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {

    const assignedClasses = [];
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>
            This is really working!!!
          </p>
          <button 
            style={props.style}
            onClick={props.clicked}>
            Toggle Persons
          </button>
      </div>
    );
}

export default cockpit;