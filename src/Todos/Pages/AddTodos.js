import React, { useState } from 'react';

import './AddTodos.css';

const AddTodos = (props)=>{

    const [newTodo,setNewTodo] =useState({
        id:'',
        name:'',
        desc:'',
        status:''
    }); 


    const addtodo= (event)=>{
        event.preventDefault();
        if(!newTodo.name || !newTodo.desc || !newTodo.status){
            alert("please fill the form");
        }else{
        props.addtodo(newTodo);
        }
    }

    return (
        <div className="addtodos">
            <h3>Add Todos</h3>
        <form onSubmit={addtodo} >
             <div className="mb-3">
                <label htmlFor="name"  className="form-label">Todo Title</label>
                <input type="text" value={newTodo.name} onChange={(e)=>setNewTodo({...newTodo,name:e.target.value})}  className="form-control" />
                
            </div>
             <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todo description</label>
                <input type="text" value={newTodo.desc}  onChange={(e)=>setNewTodo({...newTodo,desc:e.target.value})} className="form-control" />
                
            </div>
             <div className="mb-3">
                <label htmlFor="name" className="form-label">Status: Pending/Done</label>
                <input type="text" value={newTodo.status}  onChange={(e)=>setNewTodo({...newTodo,status:e.target.value})} className="form-control" />
                
            </div>
            <button type="submit" className=" sub btn btn-primary">Submit</button>
        </form>
        </div>
    );
}

export default AddTodos;