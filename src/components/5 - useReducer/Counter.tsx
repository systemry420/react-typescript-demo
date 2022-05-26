import React, { useReducer } from 'react'
import { initState, reducer } from './reducer'

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initState)

  return (
    <div>
        <button onClick={() => dispatch({ type: 'inc', payload: 10 })}>Increment by 10</button>
        <h1> {state.count} </h1>
        <button onClick={() => dispatch({ type: 'dec', payload: 10 })}>Decerement by 10</button>
    </div>
  )
}

export default Counter