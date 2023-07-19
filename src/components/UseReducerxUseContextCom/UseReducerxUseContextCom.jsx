import React from 'react'
import {createContext} from 'react';
import {useReducer} from 'react'
import ComA from './ComA'
import ComB from './ComB'
import ComC from './ComC'

export const CountContext = createContext();

const initialState = 0

const reducerFunction = (state, action) => {
  switch(action){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return 0
    default:
      return state;
  }
}

function UseReducerxUseContextCom() {
  const [count, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div style={{border: 'solid black 1px', margin: '1rem', padding: '1rem'}}>
      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <h3>Global Count = {count}</h3>
        <ComA/>
        <ComB/>
        <ComC/>
      </CountContext.Provider>
    </div>
  )
}

export default UseReducerxUseContextCom
