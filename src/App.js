import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import AboutMe from "./components/AboutMe"; 
import Resume from "./components/Resume"
import Footer from "./components/Footer";
import "./styles.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [showViewer, setShowViewer] = useState(false);

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Robert McMullen</h1>
          <Navigation showViewer={showViewer} setShowViewer={setShowViewer} />
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/resume"
              render={() => <Resume showViewer={showViewer} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
