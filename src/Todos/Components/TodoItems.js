import React from 'react';

import './TodoItems.css';
const TodoItems = (props) =>{
    return(
        <div className="card" >
            <div className="card-body" >
                <h5 className="card-title">Todo Title:  {props.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Status: {props.status} <br /></h6>
                <p className="card-text desc">{props.desc}</p>
                <button  type="button" className="delete btn btn-danger" onClick={()=>{props.delete(props.id)}}>Delete</button>&nbsp; &nbsp;
                <button type="button" className=" edit btn btn-warning" onClick={()=>{props.edit(props.id)}}  >Edit status</button>
               
            </div>
        </div>
    );

}

export default TodoItems;