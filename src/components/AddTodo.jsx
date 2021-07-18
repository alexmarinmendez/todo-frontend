import React from 'react';

import { connect } from 'react-redux';
import { addTodo } from '../actions';

export function AddTodo(props) {

  const [input, setInput] = React.useState({
    title: '',
    place: '',
    status: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    props.addTodo(input);
    setInput({
          title: '',
          place: '',
          status: ''
    });
  }

  function onInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      status: 'Todo'
    }
    );
  }

  return (
    <>
      <h1>Add</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
      	<div>
      		<label>Title</label>
            <input
              type="text"
              name="title"
              autoComplete="off"
              value={input.title}
              onChange={(e) => onInputChange(e)}
            />
      	</div>
      	<div>
      		<label>Place</label>
            <input
              type="text"
              name="place"
              autoComplete="off"
              value={input.place}
              onChange={(e) => onInputChange(e)}
            />
      	</div>
      	<div>
      		<button type="submit" value="Add">Go!</button>
      	</div>
      </form>
    </>
  )
};

export default connect(null, { addTodo })(AddTodo)