import React from "react";
import "./Background.css";

const Background = ({ src }) => {
  return (
    <div className="Background">
      <img alt="background" src={src} />
      <div className="Background-image-mask" />
    </div>
  );
};

export default Background;
