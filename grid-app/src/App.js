import logo from './logo.svg';
import './App.css';
import React, {Component, ReactPropTypes} from 'react';
import AppComponent from './Component/AppComponent';
import table from './Component/table';
import tableRow from './Component/tableRow';
import tableCell from './Component/tableCell';



function App() {
  return (
    <div className="App">
      <AppComponent/>
      <table/>
      <tableRow/>
      <tableCell/>
    </div>
  );
}

export default App;
