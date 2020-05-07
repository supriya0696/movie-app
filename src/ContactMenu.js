
import React from 'react';


const ContactMenu = (props)=> {
    console.log(props.data) 
    return (
        <>
        <div>{props.data}<div onClick={()=>props.onClick()}>{props.data}</div></div>
        </>
    );
  }
  export default ContactMenu

  