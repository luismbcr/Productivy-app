import React from 'react';

import Header from '../components/Header';
import Form from '../components/Form';
import TaskList from '../components/TaskList';

export default class ProductivityApp extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      tasks: [
        {
          title: "task 1",
          time: 60,
          timeSpend: 10,
          status: 1
        },
        {
          title: "task 1",
          time: 60,
          timeSpend: 10,
          status: 1
        }
      ]
    }
  }

  handleForm(e){
    e.preventDefault();
    console.log(1);
  }

  render(){

    return (
      <div className="main-container">
        <Header title="Productivity" />
        <Form handleForm={this.handleForm}/>
        <TaskList tasks={this.state.tasks}  />

      </div>
    )
  }
}
