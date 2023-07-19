import React, { useContext } from 'react'
import {CountContext} from './UseReducerxUseContextCom'

function ComA() {
  const countContextA = useContext(CountContext)
  return (
    <div>
      <div style={{border: 'solid black 1px'}}>
      <h3>Component A</h3>
        <h2>count = {countContextA.countState}</h2>
        <button onClick={()=>{countContextA.countDispatch('increment')}}>Increment</button>
        <button onClick={()=>{countContextA.countDispatch('decrement')}}>Decrement</button>
        <button onClick={()=>{countContextA.countDispatch('reset')}}>Reset</button>
      </div>
    </div>
  )
}

export default ComA
