import React, { useContext } from "react";
import { ThemeContext } from "../contexts";

function Nav(props) {
  const theme = useContext(ThemeContext);

  return (
    <nav className={`nav${theme.darkMode} ? '_dark' :'' `}>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact" onClick={e => theme.setDarkMode(true)}>
        Content
      </a>
    </nav>
  );
}

export default Nav;
