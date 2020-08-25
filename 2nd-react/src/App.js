import React, { useState } from "react";
import Button from "./components/Button";

import Background from "./components/Background";
import profile from "./profile.json";
import "./App.css";

function App() {
  const [about, setAbout] = useState();
  //want button to choose object from json file to set state and render from that file.

  return (
    <div className="App">
      <Background src={"./utbackground.jpg"} />
      <Button name={profile[0].name} />
      <Button name={profile[1].name} />
      <p>Single Page About Me</p>
    </div>
  );
}

export default App;
