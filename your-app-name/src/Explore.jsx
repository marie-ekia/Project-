// Explore.jsx
import React from 'react';
import './explore.css'; // Import your explore.css file

function Explore() {
  return (
    <div className="explore-container">
      <div className="gallery">
        {/* Gallery images */}
        <div className="gallery-item">
          <img src={process.env.PUBLIC_URL + '/pictures/pexels-pixabay-41949.jpg'} alt="" />
          <button className="buy-button">Buy</button>
        </div>
        <div className="gallery-item">
          <img src={process.env.PUBLIC_URL + '/pictures/pexels-steve-johnson-1509534.jpg'} alt="" />
          <button className="buy-button">Buy</button>
        </div>
        <div className="gallery-item">
          <img src={process.env.PUBLIC_URL + '/pictures/portrait-3113651_1920.jpg'} alt="" />
          <button className="buy-button">Buy</button>
        </div>
      </div>
      <div className="information">
        {/* Information about the images */}
        <h2>Gallery Information</h2>
        <p>Image 1: Description and source information.</p>
        <p>Image 2: Description and source information.</p>
        <p>Image 3: Description and source information.</p>
        {/* Add more information as needed */}
      </div>
    </div>
  );
}

export default Explore;
