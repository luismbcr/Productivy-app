import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

export default class ProductivityApp extends React.Component{
  render(){
    return (
      <div className="main-container">
        <h1>React Base</h1>
        <p>Ready to use React with scss</p>
      </div>
    )
  }
}

ReactDOM.render(<ProductivityApp />, document.getElementById('app'));
