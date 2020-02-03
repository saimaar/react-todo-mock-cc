import React from 'react'
import ToDoCard from './ToDoCard'

const CompletedContainer = (props) => {
  let toDoCard = props.completedTodos.map(todo => <ToDoCard key={todo.title} todo={todo} handleTodoDelete={props.handleTodoDelete} handleChange={props.handleChange}/>)
    return (
        <div>
            <h1>Completed Todos</h1>
            {toDoCard}
        </div>
    )
}

export default CompletedContainer
