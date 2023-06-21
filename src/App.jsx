
import "./styles.css"
import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { Button } from 'antd';
import {MdDelete} from "@react-icons/all-files/md/MdDelete"


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

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !==id)
    })
  }
  console.log(todos)
  return (

    <>

<div className="custom-page"> 
  
    <div className="custom-form"> 
      <NewTodoForm onSubmit={addTodo} />

      <h1 className="header">
        Todo List
      </h1>


      <ul className="list">
      {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          // eslint-disable-next-line react/jsx-key
          return (
            <>
              <li className="todoList" key={todo.id}>
                <label>
                  <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                  {todo.title}

                </label>
                
                <Button danger onClick={() => deleteTodo(todo.id)} className="btnDelete">
                <div className="btnDeleteIconLayout">
                  <MdDelete className="deleteIcon" />delete
                  </div>
                </Button>
                
              

              </li>
            </>
          )

        })}

      </ul>
      </div>
      </div>
    </>



  )
}

export default App
