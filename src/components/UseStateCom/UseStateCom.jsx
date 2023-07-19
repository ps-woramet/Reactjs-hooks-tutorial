import React from 'react'
import { useState } from 'react'

function UseStateCom() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("woramet");

    return (
        <div style={{border: 'solid black 1px', margin: '1rem', padding: '1rem'}}>
            <h2>useState component</h2>
            <p>{number}</p>
            <button type='button' onClick={() => setNumber((number) => number + 1)}>number + 1</button>
            <p>{name}</p>
            <button type='button' onClick={() => setName((name) => name + "1")}>name + 1</button>
        </div>  
    )
}

export default UseStateCom