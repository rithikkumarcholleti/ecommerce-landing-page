// src/services/productService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products'; // Replace with your actual API endpoint

export default {
  // Fetch all products
  getProducts() {
    return axios.get(API_URL);
  },
  
  // Fetch a single product by ID
  getProductById(productId) {
    return axios.get(`${API_URL}/${productId}`);
  },
  
  // Add more methods as needed (e.g., createProduct, updateProduct, deleteProduct)
};