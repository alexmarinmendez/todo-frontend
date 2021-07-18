import React from 'react';

import Todos from './Todos';

import { connect } from 'react-redux';
import { setList } from '../actions';

export function Home(props) {

  React.useEffect(() => {
    props.setList();
  });
  
  return (
    <div>
      <Todos key="Todo" status="Todo" />
      <Todos key="InProgress" status="InProgress" />
      <Todos key="Done" status="Done" />
    </div>
  )
};

export default connect(null, { setList })(Home);