import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { Resume } from './components/Resume';
import './styles.css';

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
            <Route path="/" exact="true" component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" render={() => <Resume showViewer={showViewer} />} />
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
