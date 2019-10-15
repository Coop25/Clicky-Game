import React, { useState } from "react";
import "./style.css";

function Img(props) {
  console.log(`background-image: url("${props.img}")`);
  return (
    <div
      className="img"
      onClick={() => props.onClick(props.id)}
      style={{ backgroundImage: "url(" + props.img + ")" }}
    ></div>
  );
}

export default Img;
