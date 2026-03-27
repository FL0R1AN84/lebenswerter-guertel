<script lang="ts" setup>
import packageJson from '../../package.json'

const version = packageJson.version
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <a
        aria-label="Instagram"
        class="footer-instagram"
        href="https://instagram.com/lebenswerter_guertel/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg
          aria-hidden="true"
          class="footer-instagram-icon"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.8"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="17.5" cy="6.5" fill="currentColor" r="0.8" stroke="none" />
        </svg>
        @lebenswerter_guertel
      </a>
      <nav class="footer-nav">
        <router-link class="footer-link" rel="nofollow" to="/kontakt"> Impressum & Kontakt </router-link>
        <router-link class="footer-link" rel="nofollow" to="/datenschutz"> Datenschutz </router-link>
      </nav>
      <p class="footer-version">Version {{ version }}</p>
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

.footer-instagram {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-green);
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 0.75rem;
  transition: color 0.3s;
}

.footer-instagram:hover {
  color: var(--color-blue);
}

.footer-instagram:focus {
  outline: 2px solid var(--color-blue);
  outline-offset: 2px;
  border-radius: 2px;
}

.footer-instagram-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
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

.footer-version {
  margin-top: 0.5rem;
  font-size: 0.875rem;
}
</style>
