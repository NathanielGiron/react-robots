import React, { Fragment } from 'react';

const SearchBox = ({ searchChange }) => {
  return(
    <Fragment>
      <input 
        type='search' 
        placeholder="Search Robots" 
        onChange={searchChange}
      />
    </Fragment>
  );
}

export default SearchBox;