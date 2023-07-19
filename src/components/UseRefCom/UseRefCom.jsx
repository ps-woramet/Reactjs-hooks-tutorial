import React from 'react'
import { useState, useEffect, useRef } from 'react'

function UseEffectCom() {
    
    const [inputValue, setInputValue] = useState("");
    const countRenderRef = useRef(0);
    console.log(countRenderRef);
    useEffect(()=>{
      countRenderRef.current = countRenderRef.current + 1;
      console.log('countRenderRef is ', countRenderRef.current);
    })
  
    const inputElement = useRef();
    const focusInput = () => {
      inputElement.current.focus();
    }
  
    const [inputValue2, setInputValue2] = useState("");
    const previousInputValue2 = useRef("");
    useEffect(() => {
      previousInputValue2.current = inputValue2
    }, [inputValue2])

    return (
        <div style={{border: 'solid black 1px', margin: '1rem', padding: '1rem'}}>
            <h2>useRef component</h2>
            <div style={{border: 'solid black 1px', margin: '1rem', padding: '1rem'}}>
                <h2>Render Count: {countRenderRef.current}</h2>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            </div>

            <div style={{border: 'solid black 1px', margin: '1rem', padding: '1rem', display:'flex', justifyContent: 'space-between'}}>
                <input type="text" ref={inputElement} />
                <button  onClick={focusInput}>Focus Input</button>
            </div>

            <div style={{border: 'solid black 1px', padding: '1rem' }}>
                <input type="text" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} />
                <h2>current value: {inputValue2}</h2>
                <h2>previous value: {previousInputValue2.current}</h2>
            </div>
        </div>
    )
    }

export default UseEffectCom
