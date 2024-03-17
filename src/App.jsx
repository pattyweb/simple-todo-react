import React, { useEffect, useState } from 'react';
import { NewTodoForm } from './NewTodoForm';
import "./bootstrap.min.css"

const CrudApp = () => {
  const [items, setItems] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(()=> {
    localStorage.setItem("ITEMS", JSON.stringify(items))

  },[items])

function addItem(title){
    setItems( currentItem => {
      return [
        ...currentItem, { id: crypto.randomUUID(), title, completed:false},
      ]
    })
}

function toggleTodo(id, completed) {
  setItems(currentItem => {
    return currentItem.map(items => {
      if (items.id === id) {
        return { ...items, completed }
      }

      return items
    })
  })
}

function deleteItems(id) {
  setItems(currentItem => {
    return currentItem.filter(items => items.id !== id)
  })
}

return (
    <div className="container mt-5">
      <h1 className="mb-4">CRUD App</h1>
      <NewTodoForm onSubmit = {addItem}/>
      <ul className="list-group">
      {items.length === 0 && "No ToDos"}
      {items.map((item) => (
        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <label className="me-2"><input type="checkbox" checked={item.completed} onChange={e => toggleTodo(item.id, e.target.checked)}/></label>
            <p className="mb-0">{item.title}</p>
          </div>
          <button className="btn btn-danger" onClick={() => deleteItems(item.id)}>Delete</button>
        </li>
      ))}

      </ul>  
    </div>
  );
};

export default CrudApp;