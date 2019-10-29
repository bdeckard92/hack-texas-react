import React from "react";

//console.log(hobbiesList);
const Hobbies = props => {
  return (
    <div>
      <ul>
        {props.hobbiesList.map((item, index) => {
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

export default Hobbies;
