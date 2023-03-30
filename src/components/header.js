import React from "react";
import Nav from "./Navigation";
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Header() {
  return (
    <div className="header">
        <h2>
            Header Page
        </h2>
        <Nav/>
    </div>
  );
}

export default Header;