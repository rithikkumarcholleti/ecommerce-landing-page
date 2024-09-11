// src/App.js
import React from 'react';
import './styles.css'; // Import the global styles

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <div id="app">
      <Header />
      <HeroSection />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
