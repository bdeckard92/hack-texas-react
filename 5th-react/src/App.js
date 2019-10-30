import React, { useState } from "react";
import Button from "./components/Button";
import Hobbies from "./components/Hobbies";
import Picture from "./components/Picture";
import Work from "./components/Work";

import Background from "./components/Background";
import profile from "./profile.json";
import "./App.css";

function App() {
  const [about, setAbout] = useState();
  //want button to choose object from json file to set state and render from that file.
  console.log(profile);

  const handleClick = event => {
    let name = event.target.value;
    if (name === "Bob") {
      setAbout(profile[0]);
    } else if (name === "Hunter") {
      setAbout(profile[1]);
    } else {
      setAbout(null);
    }
  };

  if (!about) {
    return (
      <div className="App">
        <Background src={"./utbackground.jpg"} />
        <p>Click a button to see Hunter or Bob</p>
        <Button choose={handleClick} name={profile[0].name} />
        <Button choose={handleClick} name={profile[1].name} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Background src={"./utbackground.jpg"} />
        <p>Click a button to see Hunter or Bob</p>
        <Button choose={handleClick} name={profile[0].name} />
        <Button choose={handleClick} name={profile[1].name} />
        <Button choose={handleClick} name="Click to reset" />
        <p>Single Page About Me</p>
        <Picture picture={about.image} />
        <Hobbies hobbiesList={about.hobbies} />
        <Work workList={about.work} />
        <Hobbies hobbiesList={about.edu} />
      </div>
    );
  }
}

export default App;
