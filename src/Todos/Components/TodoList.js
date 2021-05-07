import React from 'react';

import './TodoList.css';
import TodoItems from './TodoItems';
const TodoList= (props) => {

    return(
        <div className="todolist">
            <h3>Todos</h3>
            <hr></hr>
            {props.todos.map(todo=>{
                return <TodoItems id={todo.id} name={todo.name} time={todo.time} status={todo.status}  desc={todo.desc} delete={props.delete} edit={props.edit}  />
            })}
        </div>
    );

}

export default TodoList;