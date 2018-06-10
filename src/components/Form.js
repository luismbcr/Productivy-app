import React from 'react';

const Form = (props)=>(
  <form onSubmit={props.handleForm} className="form-container">
    <input type="text" placeholder="Enter task" />
    <input type="number" placeholder="Enter time minutes" />
    <button>Add Task</button>
  </form>
);

export default Form;
