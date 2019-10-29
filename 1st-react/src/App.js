import React, { useState } from "react";

import Background from "./components/Background";
import profile from "./profile.json";
import "./App.css";

console.log(`This is my json object ${profile[0].name}`);
function App() {
  const [about, setAbout] = useState();
  //want button to choose object from json file to set state and render from that file.
  console.log(`This is my json object ${profile[0].name}`);

  return (
    <div className="App">
      <Background src={"./utbackground.jpg"} />
      <p>Single Page About Me</p>
    </div>
  );
}

export default App;
