import React, { Fragment } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

const App = () => {
  return(
    <Fragment>
      <h1>Robo Friends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </Fragment>
  );
}

export default App;