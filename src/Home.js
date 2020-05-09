import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("HOME MOUNTED");
  }

  componentWillUnmount() {
    console.log("HOME UNMOUNTED");
  }

  render() {
    return (
      <>
        <div>Home page for {this.props.title}</div>
      </>
    );
  }
}

export default Home;
