import React, { useState } from "react";
import Button from "./components/Button";
import Hobbies from "./components/Hobbies";
import Picture from "./components/Picture";
import Work from "./components/Work";

import Background from "./components/Background";
import profile from "./profile.json";
import "./App.css";

function App() {
  const [about, setAbout] = useState(profile);
  //want button to choose object from json file to set state and render from that file.
  console.log(profile);

  return (
    <div className="App">
      <Background src={"./utbackground.jpg"} />
      <p>Click a button to see Hunter or Bob</p>
      <Button name={profile[0].name} />
      <Button name={profile[1].name} />
      <p>Single Page About Me</p>
      <Picture picture={about[0].image} />
      <Hobbies hobbiesList={about[0].hobbies} />
      <Work workList={about[0].work} />
      <Hobbies hobbiesList={about[0].edu} />
    </div>
  );
}

export default App;
