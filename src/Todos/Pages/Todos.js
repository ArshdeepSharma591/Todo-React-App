import React, { useState} from 'react';

import TodoList from '../Components/TodoList';
import './AddTodos.css';
import AddTodos from './AddTodos';
const Todos= ()=>{
    const [todos,setTodos] = useState([
        {
            id:1,
            name:"php",
            status:"Pending",
            desc:"PHP is a general-purpose scripting language especially suited to web development."
            
        },
        {
            id:2,
            name:"Vue",
            status:"Pending",
            desc:"Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications."
        },
        {
            id:3,
            name:"React",
            status:"Pending",
            desc:"React is an open-source, front end, JavaScript library for building user interfaces or UI components."

        },
        {
            id:4,
            name:"Python",
            status:"Pending",
            desc:"Python is an interpreted high-level general-purpose programming language. "

        }

    ]);
    const ondeletetodo = (todoid)=>{
        // console.log(todoid);
       const  tid= todos.filter(x=>x.id!==todoid)
       setTodos(tid);
    }

    const edittodo = (todoid) => {
        console.log("hello edit" + todoid);
        let newtodos=todos.map(todo=>{
            if(todo.id===todoid){
                return {...todo, status: todo.status==="Pending" ? "Done" : "Pending"}
            }else{
                return todo;
            }
        })

        setTodos(newtodos);

    }

    const addtodos = (todo) =>{
        let id=todos[todos.length-1].id+1;
        let newtodo= {...todo,id:id}
        console.log(newtodo);
        setTodos([...todos,newtodo]);
        
    }

     return (
            <React.Fragment>
            <AddTodos addtodo={addtodos} />
            <TodoList todos={todos} delete={ondeletetodo}  edit={edittodo}/>
        </React.Fragment>
    );

    


}

export default Todos;