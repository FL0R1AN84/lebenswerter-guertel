<script lang="ts" setup>
import ContactForm from '../components/ContactForm.vue'
import HeaderNavigation from '@/components/HeaderNavigation.vue'

const decryptEmail = () => {
  const encoded = 'a29udGFrdEBsZWJlbnN3ZXJ0ZXItZ3VlcnRlbC5rb2Vsbg=='
  return atob(encoded)
}
</script>

<template>
  <HeaderNavigation />
  <main class="imprint-container">
    <section class="imprint-content">
      <h1 class="imprint-title">Impressum & Kontakt</h1>

      <section class="imprint-section">
        <h2>Verantwortlich</h2>
        <p>
          <strong>IG Lebenswerter Gürtel</strong><br />
          Raderthalgürtel 6D<br />
          50968 Köln<br />
        </p>
      </section>

      <section class="imprint-section">
        <h2>Kontakt</h2>
        <p>
          Email: <span class="email-obfuscated">{{ decryptEmail() }}</span>
        </p>
      </section>

      <section class="imprint-section">
        <h2>Kontaktformular</h2>
        <p>Oder nutzen Sie das folgende Kontaktformular:</p>
        <ContactForm />
      </section>
    </section>
  </main>
</template>

<style scoped>
.imprint-container {
  min-height: calc(100vh - 200px);
  padding: 2rem;
}

.imprint-content {
  max-width: 800px;
  margin: 0 auto;
}

.imprint-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-blue);
  margin-bottom: 2rem;
  text-align: center;
}

.imprint-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-left: 4px solid var(--color-green);
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.imprint-section h2 {
  color: var(--color-blue);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.imprint-section p {
  line-height: 1.6;
  margin: 0.5rem 0;
}

.email-obfuscated {
  font-family: monospace;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
}

@media (max-width: 768px) {
  .imprint-container {
    padding: 1rem;
  }

  .imprint-title {
    font-size: 1.75rem;
  }

  .imprint-section {
    padding: 1rem;
  }
}
</style>
