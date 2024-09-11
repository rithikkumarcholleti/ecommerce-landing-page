<!-- src/components/ProductList.vue -->
<template>
  <section class="product-list">
    <div v-for="product in products" :key="product.id" class="product-card">
      <!-- Display product image, name, price, and description -->
      <img :src="`http://localhost:5000${product.image}`" :alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
      <p class="description">{{ product.description }}</p>
    </div>
  </section>
</template>

<script>
import axios from 'axios'; // Import Axios for making HTTP requests

export default {
  name: 'ProductList',
  data() {
    return {
      products: [] // Initialize products as an empty array
    };
  },
  mounted() {
    this.fetchProducts(); // Call fetchProducts when the component is mounted
  },
  methods: {
    // Define the fetchProducts function to get product data from the backend
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        console.log(response.data); // Log the response data to the console for debugging
        this.products = response.data; // Assign the fetched data to the products array
      } catch (error) {
        console.error('Error fetching products:', error); // Handle any errors during the fetch
      }
    }
  }
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center; /* Centers the product cards */
}
.product-card {
  border: 1px solid #ddd;
  padding: 10px;
  width: 30%; /* Adjust width to show three cards per row */
  box-sizing: border-box; /* Ensures padding and border are included in width */
  text-align: center;
}

.product-card img {
  width: 100%; /* Ensures the image takes the full width of its container */
  height: 200px; /* Sets a fixed height for all images */
  object-fit: cover; /* Scales the image to cover the container without stretching */
}

.description {
  font-size: 14px;
  color: #666; /* A light grey color for the description text */
  margin-top: 10px;
}
</style>
