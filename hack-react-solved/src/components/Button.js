import React from "react";

const Button = props => {
  console.log(props);
  return (
    <div>
      <button value={props.name} onClick={event => props.choose(event)}>
        Click to see {props.name}
      </button>
    </div>
  );
};

export default Button;
