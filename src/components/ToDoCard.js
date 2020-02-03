import React from 'react'

const ToDoCard = (props) => {
//in delete send the id to the parent and using filter method keep the ones
//which does not match the id
    let handleDelete=(evt)=>{
       // console.log(props.todo);
      props.handleTodoDelete(props.todo)
    }

    let handleClick=(evt)=>{
      props.handleChange(props.todo)
    }

    return (
    <div  className="ui card">
        <div className="content">
          <div className="header">{props.todo.title}</div>
          {/* The button will require some conditional rendering.
            If the button is under the Incomplete Container, button should be blue and text should say Complete
            If the button is under Complete Container, button should be orange and text should say Incomplete
            */}
          <button onClick={handleClick} className={`ui button ${props.todo.completed ? "orange" : "blue"}`}>{props.todo.completed === true ? "incomplete" : "completed"}</button>
          <button data-id={props.todo.id} onClick={handleDelete} className="ui button red">Delete</button>
        </div>

    </div>
    )
}

export default ToDoCard












//Each todo card will have button to change
//the complete status which will conditionally
//render based on the location of component.
//(i.e if a todo is under the Complete,
//the button text should say Incomplete and vice-versa.)

// let handleChange=(evt)=>{
//   if(props.todo.completed === true ){
//     evt.target.innerText = "incomplete"
//     evt.target.className = "ui button orange"
//   } else {
//     evt.target.innerText = "complete"
//     evt.target.className = "ui button blue"
//   }
// }
