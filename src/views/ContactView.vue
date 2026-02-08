<script lang="ts" setup>
import ContactForm from '../components/ContactForm.vue'
import HeaderNavigation from '@/components/HeaderNavigation.vue'

const decryptEmail = () => {
  const encoded = 'a29udGFrdEBsZWJlbnN3ZXJ0ZXItZ3VlcnRlbC5rb2Vsbg=='
  return atob(encoded)
}

const copyEmailToClipboard = () => {
  const email = decryptEmail()
  navigator.clipboard.writeText(email).then(() => {
    alert('Die E-Mail-Adresse wurde in die Zwischenablage kopiert')
  })
}
</script>

<template>
  <HeaderNavigation />
  <main class="imprint-container">
    <section class="imprint-content">
      <h1 class="imprint-title">Impressum & Kontakt</h1>

      <section class="imprint-section shadow-md dark:shadow-sm">
        <h2>Verantwortlich</h2>
        <p>
          <strong>IG Lebenswerter Gürtel</strong><br />
          Raderthalgürtel 6D<br />
          50968 Köln<br />
        </p>
      </section>

      <section class="imprint-section shadow-md dark:shadow-sm">
        <h2>Kontakt</h2>
        <p>
          E-Mail:
          <a class="email-obfuscated" rel="nofollow" @click="copyEmailToClipboard">
            {{ decryptEmail() }}
            <svg
              class="size-6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </p>
      </section>

      <section class="imprint-section shadow-md dark:shadow-sm">
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
  padding: 1rem;
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
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
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
