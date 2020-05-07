import React from "react";
import ClickBtn from './ClickBtn'
import MoviesDetail from './MoviesDetail';

export default class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      isEmptyState: true ,
      hover: false,
      apiData:[this.props.data]
    };
  }
  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    })
  }
  previousSlide () {
    debugger
    console.log(this.state.apiData)
    const lastIndex = this.props.data.components[1].items.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const lastIndex = this.props.data.components[1].items.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  movieClicked(data){
    console.log(data)
  }

  toggleHover() {
    // this.setState({hover: !this.state.hover})
  }

  render() {
    var linkStyle;
    console.log(this.props);
    const divStyle = {
      // color: "blue",
      width:250,
      height:250,
      zIndex:4
    };
    const container_box={
      display: "inline-flex"
    }

    const onImageClick = (data) =>{
      console.log(data)

    }

    if (this.state.hover) {
      linkStyle = {color: '#ed1212',cursor: 'pointer'}
    } else {
      linkStyle = {color: '#000'}
    }
    return (
      <> 
       <div className="container">
                  <div className="carousel"  >
                  {this.props.data.components[1].items.map(item => (                
                      <img className="card" style={linkStyle} src={item.imageUrl} onClick={ onImageClick } 
                       onMouseEnter={this.toggleHover}
                       onMouseLeave={this.toggleHover}  
                        />
                     
                     ))}  
                    {/* <ClickBtn data = {item} addTrip={this.triggerAddTripState} /> */}
                  </div>                
                </div>   
      </>
    );
  }
  
}
