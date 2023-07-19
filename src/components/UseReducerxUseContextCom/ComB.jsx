import React, { useContext } from 'react'
import {CountContext} from './UseReducerxUseContextCom'

function ComB() {
  const countContextB = useContext(CountContext)
  return (
    <div>
      <div style={{border: 'solid black 1px'}}>
      <h3>Component B</h3>
        <h2>count = {countContextB.countState}</h2>
        <button onClick={()=>{countContextB.countDispatch('increment')}}>Increment</button>
        <button onClick={()=>{countContextB.countDispatch('decrement')}}>Decrement</button>
        <button onClick={()=>{countContextB.countDispatch('reset')}}>Reset</button>
      </div>
    </div>
  )
}

export default ComB