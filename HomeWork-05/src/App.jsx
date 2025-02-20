import { useState } from 'react';
import './App.css'; 

function App() {
  const images = [
    '/cat1.jpg',
    '/2.jpg',
    '/5.jpg',
    '/4.jpg',
  ];



  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div style={styles.container}>
      <h1>Click on an image!</h1>
      <div style={styles.thumbnailContainer}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            style={styles.thumbnail}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      <h2>Selected Image</h2>
      <div style={styles.selectedImageContainer}>
        <img
          src={selectedImage}
          alt="Selected"
          style={styles.selectedImage}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px',
  },
  thumbnailContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  thumbnail: {
    width: '150px',
    height: 'auto',
    objectFit: 'cover',
    cursor: 'pointer',
    borderRadius: '8px',
    border: '2px solid transparent',
    transition: 'border 0.3s ease',
    '&:hover': {
      border: '2px solid #007bff',
    },
  },
  selectedImageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  selectedImage: {
    maxWidth: '300px',
    height: '450px',
    borderRadius: '8px',
  },
};

export default App;
