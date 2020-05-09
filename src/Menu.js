import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  console.log(props.data);
  return (
    <>
      <div className="container">
        <div className="carousel">
          {/* {props.data.map((item) => ( */}
          <Link to="/home" className="menu">
            <b>{props.data[0]}</b>
          </Link>
          <Link to="/movie" className="menu">
            <b>{props.data[1]}</b>
          </Link>
          <Link to="/channel" className="menu">
            <b>{props.data[2]}</b>
          </Link>
          <Link to="/About" className="menu">
            <b>{props.data[3]}</b>
          </Link>
          {/* // onClick={() => props.onClick(item)} */}
          {/* ))} */}
        </div>
      </div>
    </>
  );
};

export default Menu;
