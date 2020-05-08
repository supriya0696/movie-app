import React from 'react';


const HorizontalMenu = (props)=> {
  const style1={
    height:500,
    background: "#111111"
  }

    console.log(props.data)
    return (
      <div className="container" style={style1}>
        <div className="carousel">
          <div className="synopsis">{props.data.title}
          <img className="imageResize" src={props.data.imageUrl}/>
          </div>
          <div className="synopsis">{props.data.synopsis}</div>
        
        </div>
    </div>
    ); 
  }
  
  export default HorizontalMenu;
  