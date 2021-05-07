import React from 'react';

import { NavLink }from 'react-router-dom';

const Navigation= ()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
               
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact> All Todos</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/add/todo" exact> Add Todos</NavLink>
                    </li> */}
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;