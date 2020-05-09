import React from "react";
// import GridComponent from './GridComponent';
export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      something: "",
    };
  }
  // classes() {
  //   for (let i = 0; i < this.props.data.length; i+=1) {
  //     let designClass = "col-3 m-3  btn btn-";
  //     (designClass += this.props.data[i].completed
  //       ? "primary"
  //       : "warning");
  //   return designClass
  //   }
  // }

  render() {
    // const foo = () => {};
    console.log(this.props.data);

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                {this.props.data.map((item) => (
                  <button
                    type="button"
                    // className={this.classes()}
                    key={item}
                    onClick={() => this.props.onClickTable(item)}
                  >
                    {item.id}
                    {/* <span>{item.title}</span> */}
                    {/* <div> {props.data.map(item=><button className="btn btn-primary m-5" 
                onClick={()=>props.onClick(item)} style={v1}>{item}</button>)} */}
                    {/* designClass += this.props.data[i].completed ? {display:'block'} : {display:'none'} */}
                    {/* <GridComponent data={item} /> */}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
