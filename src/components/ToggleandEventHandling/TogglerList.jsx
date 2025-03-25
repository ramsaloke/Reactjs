// Q) Question 1: Toggle List Items
// Create a React component that displays a list of items.
// When a user clicks on an item, it should toggle its background color between blue and white.
import { useState } from 'react'
import './TogglerList.css'

const TogglerList = ()=>{
  const [selectedItems , setSelectedItems] = useState([])
  const fruits  = [ "apple", "banana", "guava ", "pineapple" , "strawberry", "mango"]

  const clickedItem = (index)=>{
  if(selectedItems.includes(index)) {
    setSelectedItems(selectedItems.filter((item)=> item !== index))
  } else {
    setSelectedItems([...selectedItems , index])
  }
  }

  return (
    <ul className="list">
      {fruits.map((fruit , index)=>(
        <li  key={index} className={`list-item ${selectedItems.includes(index) ? 'selected': ""}`}
        onClick={()=>clickedItem(index)}
        >{fruit}</li>
      ))}
    </ul>
  )
}

export default TogglerList