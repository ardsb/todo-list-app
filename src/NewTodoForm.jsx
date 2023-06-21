import { useState } from "react"
import {IoIosAddCircle} from "@react-icons/all-files/io/IoIosAddCircle"

// eslint-disable-next-line react/prop-types
export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")
  function handleSubmit(e) {

    e.preventDefault()

    if (newItem === "") return
    onSubmit(newItem)

    setNewItem("")
  }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>

      <div className="wrapper">
        <div className="input-data">
          <input value={newItem} required onChange={e => setNewItem(e.target.value)} type="text" id="item"></input>
          <div className="underline"></div>
          <label htmlFor="item"> New Item</label>
        </div>
      </div>
     
      <button className="btn" >
      <div className="addLayout"> 
      <IoIosAddCircle/> Add
      </div>
      </button>
    </form>
  )
}