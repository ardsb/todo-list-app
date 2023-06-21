import { useState } from "react"
import {IoIosAddCircle} from "@react-icons/all-files/io/IoIosAddCircle"
import { message } from 'antd';


// eslint-disable-next-line react/prop-types
export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'You have succefully added a todo...',
    });
  };

  function handleSubmit(e) {
    
    
    e.preventDefault()

    if (newItem === "") return
    onSubmit(newItem)

    setNewItem("")
  }

  return (
    <> 
 
    <form className="new-item-form" onSubmit={handleSubmit}>

      <div className="wrapper">
        <div className="input-data">
          <input value={newItem} required onChange={e => setNewItem(e.target.value)} type="text" id="item"></input>
          <div className="underline"></div>
          <label htmlFor="item"> New Item</label>
        </div>
      </div>
      {contextHolder}
      <button className="btn" onClick={success}>
      <div className="addLayout"> 
      <IoIosAddCircle className="addIcon"/> Add
      </div>
      </button>
    </form>
    </>
  )
}