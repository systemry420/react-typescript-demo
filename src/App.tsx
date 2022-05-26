import React from 'react';
import './App.css';
import Greeting from './components/1/Greeting';
import List from './components/2/List';
import Status from './components/3/Status';
import Counter from './components/5 - useReducer/Counter';
import Box from './components/6 - useContext/Box';
import { ThemeContext, ThemeProvider } from './components/6 - useContext/Theme';

function App() {

  const list = [
    { first: 'Bob', last: 'bob'},
    { first: 'Max', last: 'Max'},
    { first: 'Alice', last: 'Alice'},
  ]

  const handleClick4 = () => {}

  return (
    <div className="App">
      {/* <Greeting name='Bob' count={10} isLogged={true} />
      <List list={list} />
      <Status 
        status='loading' 
        input={{value: '', handleChange: handleClick4}} 
        handleClick4={handleClick4}
        >
        <p>THis is child in parent component</p>
      </Status> */}

      <Counter />
      <ThemeProvider>
        <Box />
      </ThemeProvider>
    </div>
  );
}

export default App;
