import React from 'react';


const HorizontalMenu = (props)=> {
  const style1={
    height:500,
    background: "#111111"
  }
  const style2={
    height:300,
    backgroundcolor: "black"
  }
  const v1={
    border:6 ,
  }
    console.log(props)
    return (
      <div className="container" style={style1}>
        <div className="card">{props.data.map(item => (
          console.log(item)
        ))}
        </div>
      {/* <div className="bg-success border border border-primary my-5" style={style2}> */}
    {/* <button className = "btn btn-primary m-5"  onClick={()=>props.onClick()}>Reset{}</button>  */}
     {/* </div> */}
    </div>
    ); 
  }
  
  export default HorizontalMenu;
  