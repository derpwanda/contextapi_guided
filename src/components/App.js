import React, { useState } from "react";
import Header from "./Header";
import DarkMode from "./DarkMode";
import { ThemeContext } from "../contexts";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = {
    darkMode: darkMode,
    setDarkMode: setDarkMode
  };

  console.log(theme);

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App${darkMode ? "_dark" : ""}`}>
        <Header />
        <h1>Welcome to Lambda School</h1>
        <DarkMode value={darkMode} setValue={setDarkMode} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
