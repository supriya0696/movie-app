import React from "react";
import ClickBtn from './ClickBtn'
import MoviesDetail from './MoviesDetail';

export default class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      isEmptyState: true ,
      hovered: false,
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

  classes() {
    for (let i = 0; i < this.props.data.length; i++) {
      let designClass = "col-3 m-3  btn btn-";
      return (designClass += this.props.data[i].completed
        ? "primary"
        : "warning");
    }
  }

  render() {
    console.log(this.props);
    const divStyle = {
      // color: "blue",
      width:250,
      height:250,
    };
    const container_box={
      display: "inline-flex"
    }

    const onImageClick = (data) =>{
      console.log(data)

    }

    const carousal= {
display:"flex"
    }
    return (
      <>
        <div>
              
              {this.props.data.components[1].items.map(item => (
                <div className="container slide">
                  <div className="carousel" >
                    <div className="card" style={divStyle} >
                      <img className="m-3" style={divStyle} src={item.imageUrl} onClick={ onImageClick } 
                        onMouseOut={() => this.setState({hovered: false})} 
                        onMouseOver={() => this.setState({hovered: true})}
                        onMouseEnter={() => this.setState({hovered: false})}
                        style={{transform: `${this.state.hovered ? 'scale(1.25,1.25)' : ''}`}}/>
                      <div className="" >{item.title}</div>
                      <div className="" key={item.id} onClick={() => this.props.onMoviesClick(item)}></div>                       
                    </div>
                    <ClickBtn data = {item} addTrip={this.triggerAddTripState} />
                  {/* </div>  */}
                  </div>                
                </div>                
              ))}
        </div>
      </>
    );
  }
  
}
