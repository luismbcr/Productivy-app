import React from 'react';

export default class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: undefined,
      time: undefined,
      disabled: 0
    }
    this.handleForm = this.handleForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleForm = (e)=>{
    e.preventDefault();
      const task = {
        title : this.state.title,
        time : this.state.time,
        timeSpend: 0,
        status: 1
      };
      this.props.handleForm(task);
      //Clean form and state
      e.target.elements.task.value = '';
      e.target.elements.time.value = '';
      this.setState({title: undefined, time: undefined,disabled:0});
  }
  handleInput = (e) =>{
    const title = document.getElementById('task').value;
    const time = document.getElementById('time').value;
    const disabled = time.length != 0  && title.length !=0;
    this.setState({title, time,disabled});

  }
  render(){
    return (
      <form onSubmit={this.handleForm} className="form-container">
        <input onChange={this.handleInput} type="text" id="task" placeholder="Enter task" />
        <input onChange={this.handleInput} type="number" id="time" placeholder="0" />
        <button disabled={!this.state.disabled}>Add Task</button>
      </form>
    )
  }

}
