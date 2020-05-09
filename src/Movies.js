import React from "react";

export default class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: true,
    };
  }
  // movieClicked(data) {
  //   console.log(data);
  // }

  render() {
    return (
      <div className="container">
        <div className="carousel">
          {this.props.data.components[1].items.map((item) => (
            <img
              className={this.state.hover ? "card" : ""}
              src={item.imageUrl}
              data={this.props.data}
              onClick={() => this.props.onClickOfImage(item)}
            />
          ))}
        </div>
      </div>
    );
  }
}
