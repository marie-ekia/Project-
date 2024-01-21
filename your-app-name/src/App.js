import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomepageContent from './Homepagecontent';
import Explore from './Explore';
import Footer from './Footer';
import './App.css'; // Assuming this import is for styling purposes


function HeaderComponent() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

// HomepageContent component
function HomepageContentComponent() {
  return (
    <div className="App">
      <HeaderComponent />
      <HomepageContent />
      <Footer />
    </div>
  );
}

// Footer component
function FooterComponent() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 CraftChronicles. All rights reserved.</p>
        <p>Follow us on <a href="https://twitter.com/CraftChronicles">Twitter</a></p>
        <p>Contact: craftchronicles@example.com</p>
      </div>
    </footer>
  );
}

// App component
function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomepageContentComponent />} />
          <Route path="explore" element={<Explore />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
