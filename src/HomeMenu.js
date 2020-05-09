import React from "react";
// /

class HomeMenu extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // window.addEventListener
  // }

  componentDidMount() {
    console.log("HOME MOUNTED");
  }

  componentWillUnmount() {
    console.log("HOME UNMOUNTED");
    // localStorage
  }

  render() {
    return (
      <>
        <div>{this.props.data}</div>
      </>
    );
  }
}

export default HomeMenu;
