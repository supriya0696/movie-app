import React from "react";
import ClickBtn from './ClickBtn'
import MoviesDetail from './MoviesDetail';
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
    let imageHover= null;
      // imageHover=this.state.apiData
      // this.setState({imageHover: this.props.data.components[1].items})

    const movieTrailerClicked = (item) =>{
      console.log(item)
      if(this.state.clicked)
      {
        // <HorizontalMenu data={this.props.data.components[1].items}/>
      }
    }

   imageHover = <HorizontalMenu data={this.props.data.components[1].items} onClick = {movieTrailerClicked}/>
    return ( 
       <div className="container">
                  <div className="carousel"  >
                  {this.props.data.components[1].items.map(item => (                 
                      <img className={this.state.hover ? 'card' : ''} src={item.imageUrl} data={this.props.data}   /> 
                                     
                     ))} 
                    
                  </div>  
                  {imageHover}
                  {/* <HorizontalMenu data={this.props.data.components[1].items}/>  */}
        </div> 
    );
  }
  
}
