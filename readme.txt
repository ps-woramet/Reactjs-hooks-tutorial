0. อธิบายการศัพท์

    import React from 'react';

    function Button(props) {
    return <button onClick={props.onClick}>{props.label}</button>;
    }

    export default Button;

    Component คือองค์ประกอบที่ใช้ในการสร้างและจัดการกับส่วนต่าง ๆ ของ UI
    ในตัวอย่างด้านบน เราสร้าง Component ชื่อ "Button" ซึ่งเป็นองค์ประกอบของปุ่ม โดยรับ prop ที่ใช้ในการกำหนดค่าของปุ่ม เช่น onClick และ label และสร้างองค์ประกอบปุ่มด้วย JSX ภายในฟังก์ชัน render ({return <button onClick={props.onClick}>{props.label}</button>;})

    ---------

    const element = <h1>Hello, World!</h1>;

    JSX (JavaScript XML) เป็นสัญลักษณ์ในภาษา JavaScript ที่ช่วยให้เราสร้างและแสดงผลองค์ประกอบ (components) ใน React ได้อย่างสะดวกและอ่านง่ายขึ้น โดย JSX เป็นสัญลักษณ์ที่คล้ายกับ HTML แต่ในรูปแบบของ JavaScript

    ---------

    {return <button onClick={props.onClick}>{props.label}</button>;}

    ฟังก์ชัน render อยู่ระหว่าง {...}

    ---------

    import React, { useState, useEffect } from 'react';

    function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect is called');
    }, [count]);

    console.log('Render');

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
    }

    export default Example;

    การทำงาน life cycle

    ใน React, Component มีการทำงานในช่วงต่าง ๆ ของ life cycle ซึ่งประกอบด้วยช่วงตอนการสร้าง (mounting), การอัปเดต (updating), และการถอดรหัส (unmounting) ดังนี้:

    Mounting:

        -constructor: เรียกใช้งานเมื่อ Component ถูกสร้างขึ้น ใช้ในการกำหนดค่าเริ่มต้นและกำหนดค่าเริ่มต้นให้กับ state และเตรียมพร้อมในการทำงานอื่น ๆ
        -static getDerivedStateFromProps: เรียกใช้งานเมื่อ Component ถูกสร้างและทุกครั้งที่ได้รับ props ใหม่ ใช้ในการอัปเดตค่า state โดยใช้ props ใหม่
        -render: เรียกใช้งานเพื่อแสดงผล UI ของ Component โดยสร้าง Virtual DOM
        -componentDidMount: เรียกใช้งานหลังจาก Component ถูกแสดงใน DOM ใช้ในการเริ่มต้นการโหลดข้อมูล, ติดตามเหตุการณ์, หรือตั้งค่าการใช้งานของอื่น ๆ
    
    Updating:

        -static getDerivedStateFromProps: เรียกใช้งานเมื่อ Component ถูก Re-render และทุกครั้งที่ได้รับ props ใหม่ ใช้ในการอัปเดตค่า state โดยใช้ props ใหม่
        -shouldComponentUpdate: เรียกใช้งานเมื่อ Component จะ Re-render ใช้ในการตรวจสอบเงื่อนไขเพื่อกำหนดว่า Component ควร Re-render หรือไม่ โดยคืนค่า true หรือ false
        -render: เรียกใช้งานเพื่อแสดงผล UI ของ Component โดยสร้าง Virtual DOM ใหม่
        -componentDidUpdate: เรียกใช้งานหลังจาก Component ถูก Re-render และ Virtual DOM ถูกอัปเดตใน DOM ใช้ในการทำงานหลังจากการอัปเดต เช่น การอัปเดตข้อมูลหรือการเรียกใช้งาน API
    
    Unmounting:

        -componentWillUnmount: เรียกใช้งานก่อนที่ Component จะถูกลบออกจาก DOM ใช้ในการทำความสะอาด, ยกเลิกการติดตามเหตุการณ์, หรือยกเลิกการใช้งานของอื่น ๆ
        
        นอกจากนี้ยังมีการใช้งานอื่น ๆ ในช่วงการทำงานของ life cycle เช่น componentDidUpdate, getSnapshotBeforeUpdate, componentDidCatch (ในกรณีการเกิด error), และ componentDidMount (ในกรณีการเรียกใช้งาน Server-side Rendering)
    สรุปคือ life cycle ใน React ประกอบด้วย Mounting, Updating, และ Unmounting โดยแต่ละช่วงจะมีช่วงเวลาและเหตุการณ์ที่เกี่ยวข้องในการสร้าง, อัปเดต, และถอดรหัสของ Component

    การทำงาน render component
    1.ทำการ Render Component Example และสร้างตัวแปร State count เริ่มต้นค่า 0
    2.โค้ด JSX ใน Component Example ถูกแปลงเป็น Virtual DOM
    3.Virtual DOM ถูกเปรียบเทียบกับ DOM จริงเพื่อหาความแตกต่าง
    4.หากมีความแตกต่าง จะมีการอัปเดตเฉพาะส่วนที่เปลี่ยนแปลงใน DOM
    5.แสดงผลใน DOM โดยการแสดงค่า count และปุ่ม Click me
    6.เมื่อมีการคลิกที่ปุ่ม, ฟังก์ชัน onClick จะถูกเรียกใน Virtual DOM
    7.useState จะอัปเดตค่า count เป็นค่าปัจจุบัน + 1
    8.Component Example จะถูก Re-render ใน Virtual DOM
    9.useEffect ถูกเรียกเนื่องจากมีการเปลี่ยนแปลงในค่า count
    10.แสดงข้อความ 'useEffect is called' ในคอนโซล
    11.Virtual DOM ถูกเปรียบเทียบกับ DOM จริงอีกครั้ง
    12.หากมีความแตกต่าง จะมีการอัปเดตเฉพาะส่วนที่เปลี่ยนแปลงใน DOM

1. npm create vite@latest
    project name: Reactjs-hook-tutorial
    > react
    > cd Reactjs-hook-tutorial
    > npm i
    > npm run dev

2. กฏของ react hook
    2.1 ไม่ใช้ hook จากภายใน loop ภายในเงื่อนไข หรือ ภายใน function ที่ซ้อนกัน
    2.2 hook ควรถูกเรียกใช้ที่ top level ของ component
    2.3 เรียกใช้ hook จาก react function component เท่านั้น
    2.4 ไม่เรียกใช้ hook จาก function ทั่วไป
    2.5 hook สามารถเรียก hook ตัวอื่นๆได้

3. useState ใช้ในการจัดการและติดตามสถานะ (state) ของคอมโพเนนต์
    เมื่อ state ของคอมโพเนนต์หรือสถานะต่าง ๆ ถูกอัปเดต คอมโพเนนต์จะถูกรีเรนเดอร์ใหม่เฉพาะส่วนที่เกี่ยวข้องเท่านั้น ไม่ใช่ทำการรีเรนเดอร์ทั้งเว็บแบบสมบูรณ์

    ใน React, useState เป็นการกำหนดค่าเริ่มต้นและการอัปเดตค่า state ในช่วงของ life cycle ของ Component ดังนี้:

    -ComponentDidMount:

        เมื่อ Component ถูกสร้างและแสดงครั้งแรกใน DOM
        useState ใช้ในการกำหนดค่าเริ่มต้นของตัวแปร state
        
    -ComponentDidUpdate:

        เมื่อ Component ถูก Re-render หลังจากการเปลี่ยนแปลงในค่า state ที่ใช้ใน useState
        การเรียกใช้ฟังก์ชันอัปเดตค่า state ใน useState จะเกิดขึ้นเมื่อมีการเรียกใช้งานในส่วนของโค้ดของ Component
        สรุปคือ useState ใช้ในช่วงของ life cycle ของ Component ในการกำหนดค่าเริ่มต้นและการอัปเดตค่า state ซึ่งจะเกิดขึ้นเมื่อ Component ถูกสร้างและแสดงครั้งแรกใน DOM และเมื่อ Component ถูก Re-render หลังจากการเรียกใช้งาน useState ในส่วนของโค้ดของ Component

    React ใช้ Virtual DOM (DOM จำลอง) เพื่อควบคุมและติดตามการอัปเดตของคอมโพเนนต์ โดยทำการเปรียบเทียบและตรวจสอบความแตกต่างระหว่าง Virtual DOM กับ DOM จริง และเฉพาะส่วนที่มีการเปลี่ยนแปลงเท่านั้นที่จะถูกรีเรนเดอร์ใหม่ใน DOM จริง
    
        const [count, setCount] = useState(0)
        count คือ ค่า state
        setCount คือ function ที่ค่า state ที่ถูก update เช่น setCount((count) => count + 1)
        useState(0) คือ กำหนดให้ count มีค่าเริ่มต้นเป็น 0

        function UseStateCom() {
            const [number, setNumber] = useState(0)

            return (
                <div style={{border: 'solid black 1px'}}>
                    <h2>use state component</h2>
                    <p>{number}</p>
                    <button type='button' onClick={() => setNumber((number) => number + 1)}>number + 1</button>
                </div>  
            )
        }

4. useEffect useEffect เป็นฟังก์ชันที่ใช้ในการจัดการผลกระทบของการเปลี่ยนแปลงในแอปพลิเคชันหรือคอมโพเนนต์
    เรียก API, การตั้งค่าผลกระทบข้างเคียง, การติดตามการเปลี่ยนแปลง, การจัดการกับคอมโพเนนต์ย่อย
    ทำงานตามหลักการเรียกใช้งานหลังการเรนเดอร์ (after render) ของคอมโพเนนต์

    ใน React, useEffect ทำงานในช่วงของ life cycle ของ Component ดังนี้:

    -ComponentDidMount:

        เมื่อ Component ถูกสร้างและแสดงครั้งแรกใน DOM
        useEffect ที่มี dependencies เป็นอาร์เรย์ว่าง [] จะถูกเรียกใช้งานหลังจากการ Render ครั้งแรกเสร็จสิ้น
    
    -ComponentDidUpdate:

        เมื่อ Component ถูก Re-render หลังจากการเปลี่ยนแปลงในค่า dependencies ที่ระบุใน useEffect
        useEffect ที่มี dependencies จะถูกเรียกใช้งานหลังจากการ Re-render เสร็จสิ้น
        
    -ComponentWillUnmount:

        เมื่อ Component ถูกลบออกจาก DOM
        useEffect ที่มีการ return ฟังก์ชัน cleanup จะถูกเรียกใช้งานเพื่อลบอินพุต เช่น การยกเลิกการติดตามเหตุการณ์หรือการยกเลิกการเรียก API
        
        สรุปคือ useEffect ทำงานในช่วงของ life cycle ของ Component โดยเรียกใช้งานหลังจากการ Render ครั้งแรกเสร็จสิ้น หรือหลังจากการ Re-render เสร็จสิ้นขึ้นอยู่กับค่า dependencies ที่ระบุใน useEffect

    useEffect(()=>{}, []);
    อาร์เรย์เป็นว่างเปล่า ซึ่งหมายความว่า useEffect จะทำงานเพียงครั้งเดียวเมื่อคอมโพเนนต์ถูกเรนเดอร์ครั้งแรก
    useEffect(callback, dependencies)

    -ตัวอย่าง การใช้ useEffect
    หากมีการ fetch api แบบไม่ใช้ useEffect จะทำให้ component ทำการ re-render จาก setData() ทำให้เกิดปัญหาการ fetch ไม่รู้จบ
    ดังนั้น การใช้ useEffect จะช่วยให้การ re-render component จากการที่ state ถูก update จะถูกจัดการ
    
        const [data, setData] = useState([]);
        useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())//แปลง json data ให้เป็น js object
            .then(dataJson => setData(dataJson))
        }, []);
        console.log(data);

    -ตัวอย่าง การใช้ useEffect
    useEffect จะทำงานเมื่อมี component ถูก render ครั้งแรกและ count มีการเปลี่ยนแปลง

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


5. useContext  เป็น Hook ที่ใช้ในการเข้าถึงค่าของ Context ในคอมโพเนนต์ได้โดยตรง โดย Context เป็นวิธีในการแชร์ข้อมูลระหว่างคอมโพเนนต์ในสถานะที่ต่างกันได้โดยไม่ต้องส่งผ่าน props อย่างตรงไปตรงมา
    
    -ปัญหาเกิดจากการส่ง ค่าไปหลาย component ต่อกันไปเรื่อยๆ เรียกว่า props drilling
        
        const [user, setUser] = useState("ps-Woramet");
        
        function App() {
            return (
                <div> 
                    <div style={{margin:'10px', border: 'solid black 1px'}}>
                        <ChildComponent1 user={user}/>
                    </div>
                </div>
            )
        }

        function ChildComponent1({user}) {
            return (
                <div>
                <h3>Child Component1</h3>
                <ChildComponent2 user={user}/>
                </div>
            )
        }

        function ChildComponent2({user}) {
            return (
                <div>
                <h3>Child Component2</h3>
                <ChildComponent3 user={user}/>
                </div>
            )
        }

        function ChildComponent3({user}) {
            return (
                <div>
                <h3>Child Component3</h3>
                <p>hello {user}</p>
                </div>
            )
        }

    -การใช้ Context จะเห็นได้ว่าค่าไม่ต้องส่งไปเรื่อยๆ แต่ สามารถส่งไป component4 ได้เลย

        import { createContext, useContext } from 'react'

        // ทำการสร้าง global state
        const UserContext = createContext();

        function App() {

        const [user, setUser] = useState("ps-Woramet");

        return (
            <div>
                <UserContext.Provider value={user}>
                    <h2>usercontext</h2>
                    <ChildComponent4/>
                </UserContext.Provider>
            </div>
        )
        }

        function ChildComponent4() {

        const user = useContext(UserContext)
        
        return (
            <div>
                <h3>Child Component4</h3>
                <p>hello {user}</p>
            </div>
        )
        }

6. useRef = {current: } 

    -สร้างอ็อบเจ็กต์ Ref และเก็บค่าที่ต้องการ
    -อ็อบเจ็กต์ Ref จะไม่ทำให้ Component Re-render เมื่อค่าเปลี่ยนแปลง
    -ใช้ในการเข้าถึงและอัปเดตองค์ประกอบหรือ DOM element โดยตรง
    -เก็บค่า state ก่อนหน้า

    -ใช้เก็บค่า ต่างกับ useState ตรงที่

        useState เมื่อค่า state เปลี่ยนจะทำการ re-render component (ใช้ตอนต้องการให้ค่าที่แสดงในหน้าจอเปลี่ยน)
        useRef เมื่อค่า useRef เปลี่ยนจะไม่ทำการ re-render component (ใช้ตอนไม่ต้องการให้ค่าที่แสดงในหน้าจอเปลี่ยน ใช้แค่เก็บค่าเฉยๆ)

    จากตัวอย่างมีการเก็บค่าเพื่อนับจำการ render component จาก state ที่เปลี่ยนไปแล้วเก็บค่าใน countRenderRef
    function App() {

        const [inputValue, setInputValue] = useState("");
        const countRenderRef = useRef(0);
        console.log(countRenderRef);

        useEffect(()=>{
            countRenderRef.current = countRenderRef.current + 1;
            console.log('countRenderRef is ', countRenderRef.current);
        })

        return (
            <div>
                <div style={{border: 'solid black 1px', margin: '1rem', padding: '1rem'}}>
                    <h2>Render Count: {countRenderRef.current}</h2>
                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                </div>
            </div>
        )
    }

    จากตัวอย่างมีการใช้ useRef ในการเข้าถึง dom element
    function App() {

        const inputElement = useRef();
        const focusInput = () => {
            inputElement.current.focus();
        }

        console.log(inputElement);

        return (
            <div>
                <div style={{border: 'solid black 1px', margin: '1rem', padding: '1rem', display:'flex', justifyContent: 'space-between'}}>
                    <input type="text" ref={inputElement} />
                    <button  onClick={focusInput}>Focus Input</button>
                </div>
            </div>
        )
    }

    จากตัวอย่างใช้ useRef ในการเก็บค่า state ก่อนหน้า
    เนื่องจากการใช้ useEffect จะทำงานหลังการ re-render ทำให้ค่า previous จะแสดงค่าค่าก่อนการ re-render
    โดยครั้งเมื่อเริ่มต้น useState = '', useRef = '' => re-render แสดงข้อความ '', '' => useEffect {useRef = useState = ''}
    จากนั้นมีการพิมพ์ w => useState = 'w', useRef = '' => re-render แสดงข้อความ 'w', '' => useEffect {useRef = useState = 'w'}
    จากนั้นมีการพิมพ์ o useState = 'wo', useRef = 'w' => re-render แสดงข้อความ 'wo', 'w' => useEffect {useRef = useState = 'wo'}
    function App() {

    const [inputValue2, setInputValue2] = useState("");
    const previousInputValue2 = useRef("");

    useEffect(() => {
      previousInputValue2.current = inputValue2
    }, [inputValue2])

    return (
        <div>
            <div style={{border: 'solid black 1px', padding: '1rem' }}>
                <input type="text" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} />
                <h2>current value: {inputValue2}</h2>
                <h2>previous value: {previousInputValue2.current}</h2>
            </div>
        </div>
        )
    }

7. useReducer เหมาะสำหรับจัดการ state ที่ซับซ้อน
    ใช้สำหรับการจัดการสถานะ (state) ของ Component โดยใช้รูปแบบของ Redux ซึ่งเป็นรูปแบบการจัดการสถานะแบบศาสตร์ข้อมูล (data-flow architecture)
    ใช้ในกรณีที่ต้องการจัดการสถานะที่ซับซ้อนหรือเกิดการอัปเดตข้อมูลที่ต้องอ้างอิงถึงค่าก่อนหน้า ซึ่งจะช่วยให้การจัดการสถานะง่ายขึ้น และลดการเขียนโค้ดซ้ำซ้อนใน Component

    useReducer รับค่า reducer function เป็นอาร์กิวเมนต์แรก โดย reducer function จะรับ state ปัจจุบันและ action เป็นพารามิเตอร์ แล้วคืนค่า state ใหม่ โดยใน reducer function จะทำการตรวจสอบ action type และอัปเดต state ตามเงื่อนไขที่กำหนด

    const [state, dispatch] = useReducer(reducer, initialState);

    state: คือค่า state ปัจจุบัน
    dispatch: เป็นฟังก์ชันที่ใช้ในการส่ง action เพื่อเรียกใช้ reducer function เพื่ออัปเดต state
    reducer: เป็นฟังก์ชันที่ใช้ในการอัปเดต state โดยรับ state ปัจจุบันและ action เป็นพารามิเตอร์ และคืนค่า state ใหม่
    initialState: ค่าเริ่มต้นของ state


    import React from 'react'
    import { useReducer } from 'react'

    const initialTodos = [
    {
        id: 1,
        title: 'to do 1',
        complete: false,
    },
    {
        id: 2,
        title: 'to do 2',
        complete: false,
    }
    ]

    // เมื่อมีการส่ง action มาทำการตรวจสอบ action.type ถ้าเข้าเงื่อนไข "COMPLETE" จะทำการ update state ถ้าไม่เข้าเงื่อนไขจะได้ state เดิม
    // เมื่อเข้าเงื่อนไข "COMPLETE" จะทำการ loop state ถ้า action.id === state.id จะทำการ update state
    const reducerFunction = (state, action) => {
        switch (action.type){
            case "COMPLETE":
                return state.map((todo) => {
                    if (todo.id === action.id){
                        return {...todo, complete: !todo.complete}
                    }else{
                        return todo;
                    }
                })
            default:
                return state;
    }
    }

    function UseReducerCom() {

    //const [state, dispatch] = useReducer(reducer, initialState);
    const [todos, dispatch] = useReducer(reducerFunction, initialTodos);

    const handleComplete = (todo) => {
        // เมื่อ click checkbox จะทำการส่ง action เพื่อเรียกใช้ reducer function เพื่ออัปเดต state
        // action is {type: "COMPLETE", id: todo.id}
        dispatch({type: "COMPLETE", id: todo.id});
    }

    return (
        <div>
            <div style={{border: 'solid black 1px', margin: '1rem', padding: '1rem'}}>
                <h2>useReducer component</h2>
                {todos.map((todo) => (
                    <div key={todo.id}>
                    <input type = "checkbox" checked={todo.complete} onChange={() => handleComplete(todo)} />
                    {todo.title}
                    </div>
                ))}
            </div>
        </div>
    )
    }

    export default UseReducerCom

8. การใช้ useContext กับ useReducer

    import React from 'react'
    import {createContext} from 'react';
    import {useReducer} from 'react'
    import ComA from './ComA'
    import ComB from './ComB'
    import ComC from './ComC'

    -การทำงานในส่วน useContext
        //ในส่วนของ parent component ทำการ createContext
        //ในส่วนของ child component ทำการ useContext

        -parent component

            - ทำการ createContext และ export
            export const CountContext = createContext();

            - ทำการส่งค่า state และ dispatch
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

        -child component

            -ทำการ import useContext และ countContext จาก parent component
            -ให้ countContextA = useContext(CountContext)
            -นำค่า state ที่ต้องการใช้จาก CountContext มาใช้หากต้องการเปลี่ยนค่า state ให้ทำการ ส่ง action ผ่านฟังก์ชัน dispatch

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
    
    -การทำงานในส่วน useReducer

        -กำหนด state เริ่มต้น

            const initialState = 0

        -กำหนด reducer ฟังก์ชัน

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

        -ทำการสร้าง state count มีค่าเริ่มต้นเป็น 0 และ กำหนดฟังก์ชัน dispatch เพื่อส่ง action ในการเรียกใช้ reducerFunction
            -parent component
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

            -child component ทำการเรียกใช้ dispatch จากนั้น state ที่ parent component จะถูกแก้ไขและค่า state ที่ส่งทาง props parent component จะถูกแก้ไข

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


                export default ComA

