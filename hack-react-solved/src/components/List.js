import React from "react";

//console.log(hobbiesList);
const List = props => {
  return (
    <div>
      <ul>
        {props.arrayList.map((item, index) => {
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

export default List;
