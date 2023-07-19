import React from 'react'
import { useState, useEffect } from 'react'

function UseEffectCom() {

    const [count, setCount] = useState(1);
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
        .then(res => res.json())//แปลง json data ให้เป็น js object
        .then(dataJson => setData(dataJson))
      }, [count]);
    
    useEffect(()=>{
        console.log('data is ',data)
      }, [data])

    return (
      <div style={{border: 'solid black 1px', margin: '1rem', padding: '1rem'}}>
          <h2>useEffect component</h2>
          <h3>{count}</h3>
          <button type='button' onClick={() => setCount((count) => count + 1)}>increase</button>
          <button type='button' onClick={() => setCount((count) => count - 1)}>decrease</button>
      </div>
    )
    }

export default UseEffectCom
