import React from 'react';
// /


class HomeMenu extends React.Component {
    constructor(props){
        super(props)
        // window.addEventListener
    }
    componentWillUnmount(){
        console.log("HOME UNMOUNTED")
        // localStorage
    }
    componentDidMount(){
        console.log("HOME MOUNTED")
    }
    render(){
        return (
            <>
            <div>{this.props.data}</div>
            </>
        );
    }
    
  }
  
  export default HomeMenu;
  

  