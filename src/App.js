import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Todos from './Todos/Pages/Todos';
// import AddTodos from './Todos/Pages/AddTodos';
import Navigation from './NavBar/Navigation';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        {/* <Route path="/" exact> */}
          <Todos />
        {/* </Route> */}
        {/* <Route path="/add/todo" exact>
          <AddTodos   />
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
