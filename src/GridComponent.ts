import React from "react";

class GridComponent extends React.Component {
    constructor(props:any){
        super(props)
        // this.state={
            
        // }
    }
    componentWillUnmount(){
        console.log("GridComponent UNMOUNTED")
    }
    componentDidMount(){
        console.log("GridComponent MOUNTED")
    }
    render(){
        console.log(this.props);
        return ( null
        );
    }
    
  }
  
  export default GridComponent;