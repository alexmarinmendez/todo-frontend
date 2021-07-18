import './App.css';

import {Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import AddTodo from './components/AddTodo';

import React from 'react';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Nav />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/add">
        <AddTodo />
      </Route>
    </div>
  );
}

export default App;
