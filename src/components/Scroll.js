import React from 'react';

const Scroll = (props) => {
  return(
    <div style={{overflow: 'scroll', border: '2px solid #000', height: '500px', 'marginTop': '5px'}}>
      {props.children}
    </div>
  );
}

export default Scroll;