import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import List from './components/List';
import Status from './components/Status';

function App() {

  const list = [
    { first: 'Bob', last: 'bob'},
    { first: 'Max', last: 'Max'},
    { first: 'Alice', last: 'Alice'},
  ]
  return (
    <div className="App">
      <Greeting name='Bob' count={10} isLogged={true} />
      <List list={list} />
      <Status status='loading'>
        <p>THis is child in parent component</p>
      </Status>
    </div>
  );
}

export default App;
