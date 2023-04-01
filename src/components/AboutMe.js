import React from "react";

const AboutMe = () => {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <div className="about-me-content">
        <div className="about-me-image">
          <img src="/profile-pic.jpg" alt="Profile" />
        </div>
        <div className="about-me-text">
          <p>
            Hello and welcome to my coding portfolio! My name is Robert and I'm
            a full-stack web developer from Charlotte, NC. I attended a
            full-stack bootcamp where I learned the skills necessary to build
            dynamic and responsive web applications. I have a strong passion for
            programming and am constantly learning new languages and frameworks
            to improve my skills. I specialize in languages such as JavaScript,
            HTML, CSS, and have experience working with libraries such as React,
            Redux, and Node.js. My approach to coding is collaborative and
            solution-oriented. I love working with a team to solve complex
            problems and create efficient solutions that deliver the best
            possible user experience. My goal is always to write clean,
            readable, and maintainable code that can be easily understood by
            others. In addition to programming, I enjoy exploring the latest
            technology trends, attending meetups, and contributing to open
            source projects. When I'm not coding, you can find me gaming,
            traveling, or spending time with my family. Thank you for taking the
            time to learn a bit about me and my work. If you have any questions
            or would like to chat about a potential project, please don't
            hesitate to reach out!
          </p>
        </div>
      </div>
      <section id="languages">
        <h2>Languages I Know:</h2>
        <div className="languages-icons">
          {[
            { src: "/js-logo.png", alt: "JavaScript" },
            { src: "/nodejs-logo.png", alt: "Node.js" },
            { src: "/sql-logo.png", alt: "SQL" },
            { src: "/mongo-logo.png", alt: "MongoDB" },
            { src: "/react-logo.png", alt: "React" },
            { src: "/sequelize-logo.png", alt: "Sequelize" },
            { src: "/express-logo.png", alt: "Express" },
            { src: "/html-logo.png", alt: "HTML" },
            { src: "/css-logo.png", alt: "CSS" },
          ].map(({ src, alt }) => (
            <div className="language-icon-wrapper" key={alt}>
              <img src={src} alt={alt} />
              <span>{alt}</span>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
