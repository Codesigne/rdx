import React from 'react';
// import logo from './logo.svg';
import './App.css';

import  List from "./components/List"

function App() {
  let asa = [
    { ttl: "Dfgdfg", f1: "sgsg", f2: "sgsg" },
    { ttl: "Dfgdfg1", f1: "sgsg", f2: "sgsgrg" },
  ]
  return (
    <div className="App">
      <List listItems={asa}></List>
    </div>
  );
}

export default App;
