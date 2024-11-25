import React, { useState } from 'react';
import axios from 'axios';

const FetchImageById = () => {
  const [imageId, setImageId] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handleFetchImage = async () => {
    setError('');
    setImage(null);

    try {
      const response = await axios.get(`http://localhost:5000/api/image/${imageId}`); // Adjust the URL for production
      if (response.data.success) {
        setImage(response.data.data);
      }
    } catch (err) {
      setError('Image not found or failed to fetch');
    }
  };

  return (
    <div>
      <h1>Fetch Image by ID</h1>
      <input
        type="text"
        value={imageId}
        onChange={(e) => setImageId(e.target.value)}
        placeholder="Enter Image ID"
      />
      <button onClick={handleFetchImage}>Fetch Image</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {image && (
        <div>
          <h2>Image Details:</h2>
          <img
            src={image.url}
            alt={`Image with ID: ${image.id}`}
            style={{ width: '300px', height: '300px', objectFit: 'cover' }}
          />
          <p>ID: {image.id}</p>
        </div>
      )}
    </div>
  );
};

export default FetchImageById;
