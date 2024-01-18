import React from 'react';
import './App.css';


// Header component
function Header() {
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
function HomepageContent() {
  return (
    <section className="homepage-content">
      <div className="welcome-message">
        <h1>Welcome to CraftChronicles</h1>
        <p>Discover the beauty of handmade crafts from around the world.</p>
      </div>
      <div className="featured-items">
        <h2>Featured Items</h2>
        <div className="featured-item">
          <img src="item1.jpg" alt="Featured Item 1" />
          <p>Beautiful Handcrafted Jewelry</p>
        </div>
        <div className="featured-item">
          <img src="item2.jpg" alt="Featured Item 2" />
          <p>Artisanal Home Decor</p>
        </div>
        {/* Add more featured items as needed */}
      </div>
      <div className="about-us">
        <h2>About Us</h2>
        <p>CraftChronicles is dedicated to showcasing the finest handmade crafts...</p>
      </div>
    </section>
  );
}

// Footer component
function Footer() {
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
      <Header />
      <HomepageContent />
      <Footer />
    </div>
  );
}

export default App;
