
import React from 'react';

function HeaderComponent() {
  return (
    <header>
      <div className="logo">
        {/* Your logo content goes here */}
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

export default HeaderComponent;
