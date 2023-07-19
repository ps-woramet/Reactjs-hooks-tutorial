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

// var fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("This is an apple.");
//     break;
//   case "banana":
//     console.log("This is a banana.");
//     break;
//   case "orange":
//     console.log("This is an orange.");
//     break;
//   default:
//     console.log("Unknown fruit.");
//     break;
// }

const reducerFunction = (state, action) => {
  switch (action.type){
    case "COMPLETE":

      // state =   [{id: 1,title: 'to do 1',complete: false,},{id: 2,title: 'to do 2',complete: false,}]
      // action = {type: 'COMPLETE', id: 1} when click checkbox1
      // state.map((todo) => {}) then todo = {id: 1,title: 'to do 1',complete: false} and {id: 2,title: 'to do 2',complete: false}
      
      // return loop state 2 times
      return state.map((todo) => {
        // if click checkbox1

        // first time todo.id is 1 === action.id is 1
        // second time todo.id is 2 === action.id is 1
        if (todo.id === action.id){
          // update state
          return {...todo, complete: !todo.complete}

        // first time todo.id is 1 === action.id is 1
        // second time todo.id is 2 === action.id is 1
        }else{

          // not update state
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
