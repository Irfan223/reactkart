import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header.js'
// import Home from './Component/Home'
// import Modal from './Component/Modal'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a  className="App-link" href="https://reactjs.org" target="_blank"  rel="noopener noreferrer"> Learn React</a>
      </header>
      <Header/>
      </div>
  
  );
}

export default App;
