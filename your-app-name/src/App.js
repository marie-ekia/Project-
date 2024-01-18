
import React from 'react';
import Header from './Header';
import HomepageContent from './Homepagecontent';
import Footer from './Footer';
import './App.css';

function HeaderComponent() {
  return (
    <header>
      <div className="logo">
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/explore">Explore</a></li>
          <li><a href="/contact">Contact</a></li>
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
    <div className="App">
      <HeaderComponent />
      <HomepageContentComponent />
      <FooterComponent />
    </div>
  );
}

export default App;