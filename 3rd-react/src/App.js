import React, { useState } from "react";
import Button from "./components/Button";
import Hobbies from "./components/Hobbies";

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
      <Button name={profile[0].name} />
      <Button name={profile[1].name} />
      <p>Single Page About Me</p>
      <Hobbies hobbiesList={about[0].hobbies} />
    </div>
  );
}

export default App;
