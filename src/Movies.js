import React from "react";
import HorizontalMenu from './NavBar';

export default class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: true,
      clicked:true,
      apiData:[this.props.data]
    };
  }
  movieClicked(data){
    console.log(data)
  }

  

  render() {
    return ( 
       <div className="container">
                  <div className="carousel"  >
                  {this.props.data.components[1].items.map(item => (                 
                      <img className={this.state.hover ? 'card' : ''} src={item.imageUrl} data={this.props.data} 
                      onClick={()=>this.props.onClickOfImage(item)} /> 
                     ))} 
                  </div>  
        </div> 
    );
  }
  
}
