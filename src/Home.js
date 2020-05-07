import React from 'react';


class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    componentWillUnmount(){
        console.log("HOME UNMOUNTED")
    }
    componentDidMount(){
        console.log("HOME MOUNTED")
    }
    render(){
        return (
            <>
            <div>Home page for {this.props.title}</div>          
                
            </>
        );
    }
    
  }
  
  export default Home;
  