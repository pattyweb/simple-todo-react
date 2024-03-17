import React, { useState } from 'react';

export function NewTodoForm(props){
    props.onSubmit
    const [newItem, setNewItem] = useState('')

    function handleAddItem(e) {
        e.preventDefault()
        props.onSubmit(newItem)
        setNewItem('')
      };    
      return(   
    <div className="mt-3">
    <input
      type="text"
      className="form-control"
      placeholder="Enter a new item"
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)}
    />
    <button className="btn btn-primary mt-2 mb-2" onClick={handleAddItem}>Add Item</button>
  </div>
  )
}