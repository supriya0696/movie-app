import React from 'react';


const HorizontalMenu = (props)=> {
  const style1={
    height:500
  }
  const style2={
    height:300
  }
  const v1={
    border:6 ,
  }
    console.log(props)
    return (
      <div className="mw-100 bg-warning border border-success" style={style1}>
        <div className="border border-primary">
            <div> {props.data.map(item=><button className="btn btn-primary m-5" onClick={()=>props.onClick(item)} style={v1}>{item}</button>)}
            </div>           
        </div>
      <div className="bg-success border border border-primary my-5" style={style2}>
    <button className = "btn btn-primary m-5"  onClick={()=>props.onClick()}>Reset{}</button> 
     </div>
    </div>
    ); 
  }
  
  export default HorizontalMenu;
  