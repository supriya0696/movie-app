import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  console.log(props.data);
  return (
    <>
      <div className="container">
        <div className="carousel">
          {props.data.map((item) => (
            <Link to="/menu" className="menu">
              <b>{item}</b>
            </Link>
            // onClick={() => props.onClick(item)}
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
