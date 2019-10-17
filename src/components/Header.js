import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";

function Header(props) {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
