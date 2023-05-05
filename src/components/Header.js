import React from "react";
import background from "../images/abstract-paper-background-concept.jpg";

function Header() {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <h1>Andrew Messer</h1>
      <h3>Full-Stack Software Developer</h3>
    </div>
  );
}

export default Header;
