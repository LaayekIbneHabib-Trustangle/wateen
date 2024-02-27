import React from "react";
import "./style.css";

const Bars = (props) => {
  return (
    <>
      <div className="bars">
        <img src={props.img} alt="" />
      </div>
    </>
  );
};

export default Bars;
