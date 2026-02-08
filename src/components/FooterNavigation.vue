<template>
  <footer class="footer">
    <div class="footer-content">
      <nav class="footer-nav">
        <router-link class="footer-link" rel="nofollow" to="/kontakt">
          Impressum & Kontakt
        </router-link>
        <router-link class="footer-link" rel="nofollow" to="/datenschutz">
          Datenschutz
        </router-link>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 1rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.footer-link {
  color: var(--color-green);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

.footer-link:hover {
  color: var(--color-blue);
}

.footer-link:focus {
  outline: 2px solid var(--color-blue);
  outline-offset: 2px;
  border-radius: 2px;
}
</style>
