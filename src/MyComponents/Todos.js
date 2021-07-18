import React from 'react'
import TodoItem from './TodoItem';
const Todos = (props) => {
  let myStyle ={
      minHeight : "70vh"
  }

  return (
    <div className ="container my-3" style ={myStyle}>
       <h4 className="my-3">Todos List</h4>
        {props.todos.length === 0 ? "No Todos to Display" : 
         props.todos.map((todo) => {
           console.log("props.todos.length  : ",props.todos.length)
          return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
         })
        }
    </div>
  )
}

export default Todos
