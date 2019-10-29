import React from "react";

const Work = props => {
  return (
    <div>
      <ul>
        {props.workList.map((item, index) => {
          return (
            <li key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Work;
