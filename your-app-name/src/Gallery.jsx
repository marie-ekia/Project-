
import React from 'react';

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-item">
        <img src={process.env.PUBLIC_URL + '/pictures/pexels-pixabay-41949.jpg'} alt="Gallery 1" />
        <button className="buy-button">Buy</button>
      </div>
      <div className="gallery-item">
        <img src={process.env.PUBLIC_URL + '/pictures/pexels-steve-johnson-1509534.jpg'} alt="Gallery 2" />
        <button className="buy-button">Buy</button>
      </div>
      <div className="gallery-item">
        <img src={process.env.PUBLIC_URL + '/pictures/portrait-3113651_1920.jpg'} alt="Gallery 3" />
        <button className="buy-button">Buy</button>
      </div>
      {/* Add more gallery items as needed */}
    </div>
  );
};

export default Gallery;
