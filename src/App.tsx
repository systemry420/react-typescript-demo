import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import List from './components/List';

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
    </div>
  );
}

export default App;
