import React, { useContext } from "react";
import { ThemeContext } from "../contexts";

function DarkMode(props) {
  const theme = useContext(ThemeContext);

  return (
    <label>
      <input
        type="checkbox"
        value={theme.darkMode}
        onChange={e => theme.setDarkMode(e.target.checked)}
      />
      <span>Dark Mode</span>
    </label>
  );
}

export default DarkMode;
