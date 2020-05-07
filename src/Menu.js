import React from 'react';


const Menu = (props)=> {
    
    return (
        <>
        {props.data.map(item=><div onClick={()=>props.onClick(item)}>{item}</div>)}      
        </>
    );
  }
  
  export default Menu;
  