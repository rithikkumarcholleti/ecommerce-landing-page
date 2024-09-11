<!-- src/components/Header.vue -->
<template>
  <header class="header">
    <nav class="navbar">
      <img src="@/assets/logo1.png" alt="My E-commerce Logo" class="logo" />
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Cart</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style scoped>
.header {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 50px; /* Adjust this size as needed */
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}
</style>