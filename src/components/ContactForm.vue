<script lang="ts" setup>
import { reactive, ref } from 'vue'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

const formData = reactive<FormData>({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const errors = reactive<FormErrors>({})
const submitted = reactive({ success: false, error: false })
const isLoading = ref(false)

const validateForm = (): boolean => {
  errors.name = undefined
  errors.email = undefined
  errors.message = undefined

  if (!formData.name.trim()) {
    errors.name =
      'Wir würden gerne wissen, wie wir Sie ansprechen dürfen. Bitte geben Sie Ihren Namen ein.'
  }

  if (!formData.email.trim()) {
    errors.email =
      'Wir möchten sicherstellen, dass wir Sie erreichen können. Bitte geben Sie eine gültige E-Mail-Adresse ein.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email =
      'Die E-Mail-Adresse scheint ungültig zu sein. Bitte überprüfen Sie Ihre Eingabe und versuchen Sie es erneut.'
  }

  if (!formData.message.trim()) {
    errors.message =
      'Wir freuen uns darauf, von Ihnen zu hören! Bitte teilen Sie uns Ihr Anliegen mit, damit wir Ihnen bestmöglich weiterhelfen können.'
  } else if (formData.message.trim().length < 10) {
    errors.message =
      'Die Nachricht sollte mindestens 10 Zeichen lang sein, damit wir Ihre Anliegen besser verstehen können.'
  }

  return Object.keys(errors).length === 0
}

const handleSubmit = async () => {
  if (validateForm()) {
    isLoading.value = true
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      submitted.success = true
      submitted.error = false
      formData.name = ''
      formData.email = ''
      formData.phone = ''
      formData.message = ''

      setTimeout(() => {
        submitted.success = false
      }, 5000)
    } catch (error) {
      console.error('Error:', error)
      submitted.error = true
      setTimeout(() => {
        submitted.error = false
      }, 5000)
    } finally {
      isLoading.value = false
    }
  }
}
</script>

<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
    <div v-if="submitted.success" class="success-message" role="alert">
      Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
    </div>

    <div v-if="submitted.error" class="error-message" role="alert">
      Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.
    </div>

    <div class="form-group">
      <label class="form-label" for="name">Name <span class="required">*</span></label>
      <input
        id="name"
        v-model="formData.name"
        :aria-describedby="errors.name ? 'name-error' : undefined"
        :aria-invalid="!!errors.name"
        class="form-input"
        required
        type="text"
      />
      <p v-if="errors.name" id="name-error" class="error-message">
        {{ errors.name }}
      </p>
    </div>

    <div class="form-group">
      <label class="form-label" for="email">E-Mail <span class="required">*</span></label>
      <input
        id="email"
        v-model="formData.email"
        :aria-describedby="errors.email ? 'email-error' : undefined"
        :aria-invalid="!!errors.email"
        class="form-input"
        required
        type="email"
      />
      <p v-if="errors.email" id="email-error" class="error-message">
        {{ errors.email }}
      </p>
    </div>

    <div class="form-group">
      <label class="form-label" for="phone">Telefon</label>
      <input
        id="phone"
        v-model="formData.phone"
        :aria-describedby="errors.phone ? 'phone-error' : undefined"
        :aria-invalid="!!errors.phone"
        class="form-input"
        type="tel"
      />
      <p v-if="errors.phone" id="phone-error" class="error-message">
        {{ errors.phone }}
      </p>
    </div>

    <div class="form-group">
      <label class="form-label" for="message">Nachricht <span class="required">*</span></label>
      <textarea
        id="message"
        v-model="formData.message"
        :aria-describedby="errors.message ? 'message-error' : undefined"
        :aria-invalid="!!errors.message"
        class="form-input form-textarea"
        required
        rows="5"
      ></textarea>
      <p v-if="errors.message" id="message-error" class="error-message">
        {{ errors.message }}
      </p>
    </div>

    <button :disabled="isLoading" class="submit-button" type="submit">
      <span v-if="!isLoading">Nachricht senden</span>
      <span v-else class="flex items-center justify-center gap-2">
        <svg
          class="animate-spin h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill="currentColor"
          ></path>
        </svg>
        Wird gesendet...
      </span>
    </button>
  </form>
</template>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
}

.success-message {
  margin-bottom: 1rem;
  padding: 1rem;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.required {
  color: #e74c3c;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s;
}

.form-input:focus {
  outline: none;
  border-color: var(--color-blue);
  box-shadow: 0 0 0 3px rgba(0, 158, 227, 0.1);
}

.form-input[aria-invalid='true'] {
  border-color: #e74c3c;
}

.form-textarea {
  resize: vertical;
}

.error-message {
  margin-top: 0.5rem;
  color: #e74c3c;
  font-size: 0.875rem;
}

.submit-button {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--color-blue) 0%, var(--color-green) 100%);
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s;
}

.submit-button:hover {
  opacity: 0.9;
}

.submit-button:focus {
  outline: 3px solid var(--color-blue);
  outline-offset: 2px;
}

.submit-button:active {
  opacity: 0.8;
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
