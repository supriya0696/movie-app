import React from "react";
import ClickBtn from './ClickBtn'
import MoviesDetail from './MoviesDetail';

export default class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      isEmptyState: true ,
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
      color: "blue",
      //  width:450,
      // height: 350,
        // justifyContent:'center',
        // alignItems:'center',
    };
    const container_box={
      // marginLeft:313,
      // width:3000
      // display:flex,
      // flexDirection:row,
      // position: absolute,
      // display: inline-flex,
    }

    const onImageClick = (data) =>{
      console.log(data)

    }
    return (
      <>
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"> Card title </h5>
             <div>
              
              {this.props.data.components[1].items.map(item => (
                <div className="row">
                  <div className="carousel" >
                    <div className="border flexbox-container border-dark h-94 " style={container_box}>
                    {/* <Arrow direction="left" clickFunction={ this.previousSlide }  /><span glyph="&#9664;" ></span> */}
                      <img
                        className="m-3 w-650 h-350"
                        style={divStyle}
                        src={item.imageUrl} onClick={ onImageClick }
                      />
                      <div className="" >{item.title}</div>
            
                     

                      {/* <Arrow
          direction="right"
          clickFunction={ this.nextSlide }
          /> <span  glyph="&#9654;"></span> */}
                      <div
                        className="w-650 h-350"
                        style={divStyle}
                        key={item.id}
                        onClick={() => this.props.onMoviesClick(item)}
                      ></div>
                       
                    </div>
                    {/* <button className="btn btn-primary" onClick={()=>{if(window.confirm(item.synopsis)) this.movieClicked(true)}}>Movie-details</button> */}
                    <ClickBtn data = {item} addTrip={this.triggerAddTripState} />
                  </div>
                 
                </div>
                
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  // setMovieClass(){
  //     innerWidth=500,
  //     innerHeight=500
  // }
}
