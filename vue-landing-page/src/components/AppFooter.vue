<!-- src/components/Footer.vue -->
<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 My E-commerce Website. All Rights Reserved.</p>
      <ul class="footer-links">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}
.footer-links {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0;
}
.footer-links a {
  color: #fff;
  text-decoration: none;
}
</style>
