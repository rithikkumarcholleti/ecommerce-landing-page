<!-- src/App.vue -->
<template>
  <div id="app">
    <AppHeader />
    <HeroSection />
    <ProductList />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import HeroSection from './components/HeroSection.vue';
import ProductList from './components/ProductList.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    HeroSection,
    ProductList,
    AppFooter
  }
};
</script>

<style>
/* Add any global styles here */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
