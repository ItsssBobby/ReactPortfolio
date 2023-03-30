// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Robert McMullen</h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route exact path="/" component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2022 My Portfolio</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
