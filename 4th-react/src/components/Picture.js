import React from "react";

const Picture = props => {
  return (
    <div>
      <img src={props.picture} style={{ height: 100 }} />
    </div>
  );
};

export default Picture;
