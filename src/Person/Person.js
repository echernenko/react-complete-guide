import React from 'react';
import './Person.css';

const person = (props) => {
    const rnd = Math.random();
    if (rnd > 0.7) {
      throw new Error('Something went wrong');
    }
    return (
       <div className="Person">
         <p onClick={props.click}>I am a {props.name} and I am {props.age} years old.</p>
         <p>{props.children}</p>
         <p>
           <input type="text" value={props.name} onChange={props.changed} />
         </p>
       </div>
   );
};

export default person;