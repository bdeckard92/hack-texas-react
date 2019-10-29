import React, { useState } from "react";
import Hobbies from "./components/Hobbies";
import Work from "./components/Work";
import Picture from "./components/Picture";
import Button from "./components/Button";
import Background from "./components/Background";
import profile from "./profile.json";
import "./App.css";

console.log(`This is my json object ${profile[0].name}`);
function App() {
  const [about, setAbout] = useState();
  //want button to choose object from json file to set state and render from that file.
  console.log(`This is my json object ${profile[0].name}`);

  const handleClick = event => {
    console.log("this is my event", event.target.value);
    let name = event.target.value;
    console.log(`this is my click value ${name}`);
    if (name === "Bob") {
      setAbout(profile[0]);
    } else {
      setAbout(profile[1]);
    }
  };

  return (
    <div>
      <div>
        <p>Click a button to see Hunter or Bob</p>
        <Button choose={handleClick} name={profile[0].name} />
        <Button choose={handleClick} name={profile[1].name} />
      </div>
      {about ? (
        <div className="App">
          <Background src={"./utbackground.jpg"} />
          <p>Single Page About Me</p>
          <div>{about.name}</div>
          <Picture picture={about.image} />
          <Hobbies hobbiesList={about.hobbies} />
          <Work workList={about.work} />
          <Hobbies hobbiesList={about.edu} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
