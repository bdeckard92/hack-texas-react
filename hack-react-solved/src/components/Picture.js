import React from "react";

//console.log(hobbiesList);
const Picture = props => {
  console.log(props.picture);
  return (
    <div>
      <img src={props.picture} style={{ height: 100 }} />
    </div>
  );
};

export default Picture;
