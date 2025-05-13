import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = ({ title }) => {
  const [exhibits, setExhibits] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/exhibits')
      .then(response => setExhibits(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="gallery-container">
      <h2>{title}</h2>
      <div className="exhibit-grid">
        {exhibits.map(exhibit => (
          <div key={exhibit.id} className="exhibit-card">
            <img src={exhibit.imageUrl} alt={exhibit.title} />
            <h3>{exhibit.title}</h3>
            <p>{exhibit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
