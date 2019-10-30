import React from "react";

const Button = props => {
  return (
    <div>
      <button value={props.name} onClick={event => props.choose(event)}>
        Click to See A {props.name}
      </button>
    </div>
  );
};

export default Button;
