import React from 'react';

import Todo from './Todo';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export function Todos(props) {
  var statusTodo = [];
  if (props.todos.payload) {
    for (var i=0; i<props.todos.payload.length; i++) {
      if (props.todos.payload[i].status === props.status) {
        statusTodo.push(props.todos.payload[i]);
      }
    }
  }
  // console.log("statusTodo", statusTodo);
  return <>
    <span>{props.status}</span>
    {statusTodo.map((elem)=> {
        return <Link key={elem.id} to={`/edit/${elem.id}`}><Todo title={elem.title} key={elem.id} /></Link>
    })}
  </>
};

function mapStateToProps(store) {
  return {
    todos: store
  }
}

export default connect(mapStateToProps)(Todos);