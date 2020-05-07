import React from 'react';

const ClickBtn = (props ) => {
  console.log(props)
  return <button className="btn btn-primary" onClick={props.synopsis}>Add a trip</button>
}
  

  export default  ClickBtn;