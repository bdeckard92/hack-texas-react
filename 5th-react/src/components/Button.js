import React from "react";

const Button = props => {
  return (
    <div>
      <button>
        Click to See A {props.name}
      </button>
    </div>
  );
};

export default Button;
