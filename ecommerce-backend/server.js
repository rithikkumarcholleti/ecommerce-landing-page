const express = require('express');
const cors = require('cors');
const path = require('path');  // Import path module
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/images', express.static('public/images'));
app.use(express.static('public'));  // Serve static files from 'public' directory

// Serve the default HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API Endpoint for fetching product data
app.get('/api/products', (req, res) => {
  res.json([
    { 
      id: 1, 
      name: 'Mens Shirt', 
      price: 29.99, 
      image: '/images/product1.jpg',
      description: 'Black Shirt for Men.' 
    },
    { 
      id: 2, 
      name: 'Mens Shirt', 
      price: 39.99, 
      image: '/images/product2.jpg',
      description: 'Black Shirt for Men.'
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
