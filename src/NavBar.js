import React from 'react';


const HorizontalMenu = (props)=> {
  const style1={
    height:500,
    background: "#111111"
  }
    console.log(props)
    return (
      <div className="container" style={style1}>
        <div className="carousel">
          {props.data.map(item => (
          
          <div className="synopsis">{item.synopsis}</div>
          // <img src={item.imageUrl} /> 
                    
          ))}  } 
        </div>
    </div>
    ); 
  }
  
  export default HorizontalMenu;
  