
import "./styles.css"
import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm"

function App() {


  const [todos, setTodos] = useState([])
  

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }
  console.log(todos)
  return (
    
    <>
      <NewTodoForm onSubmit={addTodo}/>
    
      <h1 className="header">
        Todo List
      </h1>
     
      
      <ul  className="list">
      {todos.map(todo => {
        // eslint-disable-next-line react/jsx-key
        return (
          <> 
          <li key={todo.id}>
          <label>
            <input type="checkbox"  checked={todo.completed}/>
            {todo.title}

          </label>
          <button className="btn btn-danger">
            delete
          </button>

        </li>
        </>
        )
        
      })}
      
      </ul>
    </>



  )
}

export default App
