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
  padding: var(--space-4);
  text-align: center;
  margin-top: var(--space-4);
  margin-bottom: var(--space-4);
}

.footer-content {
  max-width: var(--size-wide-content);
  margin: 0 auto;
}

.footer-instagram {
  display: inline-flex;
  align-items: center;
  gap: var(--space-icon-gap);
  color: var(--color-green);
  text-decoration: none;
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-3);
  transition: color var(--duration-default);
}

.footer-instagram:hover {
  color: var(--color-blue);
}

.footer-instagram:focus {
  outline: var(--border-width-medium) solid var(--color-blue);
  outline-offset: var(--space-1);
  border-radius: var(--radius-small);
}

.footer-instagram-icon {
  width: var(--size-icon-small);
  height: var(--size-icon-small);
  flex-shrink: 0;
}

.footer-nav {
  display: flex;
  justify-content: center;
  gap: var(--space-4);
}

.footer-link {
  color: var(--color-green);
  text-decoration: none;
  font-weight: var(--font-weight-semibold);
  transition: color var(--duration-default);
}

.footer-link:hover {
  color: var(--color-blue);
}

.footer-link:focus {
  outline: var(--border-width-medium) solid var(--color-blue);
  outline-offset: var(--space-1);
  border-radius: var(--radius-small);
}

.footer-version {
  margin-top: var(--space-2);
  font-size: var(--font-size-sm);
}
</style>
