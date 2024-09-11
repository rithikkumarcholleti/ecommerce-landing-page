<!-- src/components/HeroSection.vue -->
<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1>Discover Our Latest Collection</h1>
      <p>Explore the best products at unbeatable prices.</p>
      <button>Shop Now</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
};
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/hero-image.jpg'); /* Correct path to the image */
  background-size: cover;
  background-position: center;
}

.hero-content {
  position: relative;
  text-align: center;
  color: #fff;
  z-index: 1;
}

.hero-content h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.hero-content p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.hero-content button {
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}
</style>
