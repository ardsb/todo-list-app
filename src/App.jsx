
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

  function toggleTodo(id, completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo => {
        if (todo.id === id){
          return{...todo,completed}
        }
        return todo
      })
    })
  }
  console.log(todos)
  return (

    <>
      <NewTodoForm onSubmit={addTodo} />

      <h1 className="header">
        Todo List
      </h1>


      <ul className="list">
        {todos.map(todo => {
          // eslint-disable-next-line react/jsx-key
          return (
            <>
              <li key={todo.id}>
                <label>
                  <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
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
