import React, { Component } from 'react';
import Users from './Users'
import Comment from './Comment'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Users style={{background:'red'}}/>
          <Comment/>
        </header>
      </div>
    );
  }
}

export default App;
