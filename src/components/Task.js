import React from 'react';
let timer;
export default class Task extends React.Component{

  constructor(props){
    super(props);

    this.state ={
      time: 0,
      counter: false
    }
    this.handleTimer = this.handleTimer.bind(this);
  }

  handleTimer=(e)=>{
    e.preventDefault();

    if(!this.state.counter){
      this.setState({counter: true});
      timer =  setInterval(()=>{
        this.setState(((prevState)=>({
          time: prevState.time + 0.01
        })));
      }, 1000);
    }else{
      this.setState({counter: false});
      clearInterval(timer);
    }

  };
  componentWillMount(){
    this.setState({
      time: this.props.timeSpend
    });
  }
  componentWillUnmount(){
    clearInterval(timer);
  }
  //{this.props.timeSpend}
  render(){
        return (
          <div className="task" key={this.props.index}>
            <h5>{this.props.title}</h5>
            <div>Time: {this.props.time} min</div>
            <div>Spend: {(this.state.time).toFixed(2)} min</div>
            <button onClick={this.handleTimer}>{this.state.counter ? 'Stop': 'Work' }</button>
            <button onClick={()=>{this.props.handleDone(this.props.title); }}>Done</button>
          </div>
        );
    }
}
