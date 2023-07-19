import React, { useContext } from 'react'
import {CountContext} from './UseReducerxUseContextCom'

function ComC() {
  const countContextC = useContext(CountContext)
  return (
    <div>
      <div style={{border: 'solid black 1px'}}>
      <h3>Component C</h3>
        <h2>count = {countContextC.countState}</h2>
        <button onClick={()=>{countContextC.countDispatch('increment')}}>Increment</button>
        <button onClick={()=>{countContextC.countDispatch('decrement')}}>Decrement</button>
        <button onClick={()=>{countContextC.countDispatch('reset')}}>Reset</button>
      </div>
    </div>
  )
}

export default ComC