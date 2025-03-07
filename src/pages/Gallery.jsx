import React from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  const images = [
    { id: 1, src: '/images/gallery-1.jpeg', alt: 'Customer enjoying pastries' },
    { id: 2, src: '/images/gallery-2.jpeg', alt: 'Ice cream sundae' },
    { id: 3, src: '/images/gallery-3.jpeg', alt: 'Birthday celebration' },
    { id: 4, src: '/images/gallery-4.jpeg', alt: 'Coffee and pastries' },
    { id: 5, src: '/images/gallery-5.jpeg', alt: 'Family enjoying ice cream' },
    { id: 6, src: '/images/gallery-6.jpeg', alt: 'Artisanal ice cream' },
  ];

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;