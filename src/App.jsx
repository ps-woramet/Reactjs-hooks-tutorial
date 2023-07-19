import { useState} from 'react'
import { createContext, useContext} from 'react'
import UseStateCom from './components/UseStateCom/UseStateCom';
import UseEffectCom from './components/UseEffectCom/UseEffectCom';
import UseRefCom from './components/UseRefCom/UseRefCom';
import UseReducerCom from './components/UseReducerCom/UseReducerCom';
import UseReducerxUseContextCom from './components/UseReducerxUseContextCom/UseReducerxUseContextCom';
import './App.css'

// uesContext Example
const UserContext = createContext();

function App() {
  
  // uesContext Example
  const [user, setUser] = useState("woramet");

  return (
    <div>
      <UseStateCom />
      <UseEffectCom />
      
      <div style={{margin:'10px', border: 'solid black 1px'}}>
        <h2>props drilling</h2>
        <ChildComponent1 user={user}/>
      </div>
      
      <UserContext.Provider value={user}>
          <ChildComponent4/>
      </UserContext.Provider>

      <UseRefCom/>
      <UseReducerCom/>
      <UseReducerxUseContextCom/>

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

function ChildComponent4() {
  const user = useContext(UserContext)
  return (
    <div style={{margin:'10px', border: 'solid black 1px'}}>
      <h2>userContext</h2>
      <h3>Child Component4</h3>
      <p>hello {user}</p>
    </div>
  )
}
export default App
