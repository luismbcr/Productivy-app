import React from 'react';

import Header from '../components/Header';
import Form from '../components/Form';
import TaskList from '../components/TaskList';

export default class ProductivityApp extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      tasks: []
    }
    this.handleForm = this.handleForm.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  handleForm = (task)=>{
    //insert new task
    this.setState((prevState)=>{
      tasks: prevState.tasks.push(task);
    });
  }

  handleDone = (taskToRemove) =>{
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => taskToRemove !== task.title)
    }));

  };


  render(){
    return (
      <div className="main-container">
        <Header title="Productivity" />
        <Form handleForm={this.handleForm}/>
        <TaskList tasks={this.state.tasks} handleDone={this.handleDone}  />
      </div>
    )
  }
}
