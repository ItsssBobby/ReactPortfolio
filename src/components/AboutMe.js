import React from "react";
import { Parallax } from "react-parallax";
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function AboutMe() {
  return (
    <div className="mainPage">
<Parallax
        blur={{ min: -15, max: 15 }}
        bgImage="https://t4.ftcdn.net/jpg/02/00/68/69/240_F_200686969_GJ7zbz2qaNIE4dyHSbZkQXvNPzRuwlr3.jpg"
        bgImageAlt="the dog"
        strength={500}
    >
        <h2>About me</h2>
        <div style={{ height: '80%' }} />
</Parallax>
    </div>
  );
}

export default AboutMe;