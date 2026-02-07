<script lang="ts" setup>
import { reactive } from 'vue'

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
const submitted = reactive({ success: false })

const validateForm = (): boolean => {
  errors.name = undefined
  errors.email = undefined
  errors.phone = undefined
  errors.message = undefined

  if (!formData.name.trim()) {
    errors.name =
      'Wir würden gerne wissen, wie wir Sie ansprechen dürfen. Bitte geben Sie Ihren Namen ein.'
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email =
      'Wir möchten sicherstellen, dass wir Sie erreichen können. Bitte geben Sie eine gültige E-Mail-Adresse ein.'
  }

  if (!formData.phone.trim()) {
    errors.phone = 'Phone is required'
  } else if (!/^[+\d\s\-()]+$/.test(formData.phone)) {
    errors.phone =
      'Wir möchten sicherstellen, dass wir Sie erreichen können. Bitte geben Sie eine gültige Telefonnummer ein.'
  }

  if (!formData.message.trim()) {
    errors.message = 'Message is required'
  } else if (formData.message.trim().length < 10) {
    errors.message =
      'Die Nachricht sollte mindestens 10 Zeichen lang sein, damit wir Ihre Anliegen besser verstehen können.'
  }

  return Object.keys(errors).length === 0
}

const handleSubmit = () => {
  if (validateForm()) {
    submitted.success = true
    formData.name = ''
    formData.email = ''
    formData.phone = ''
    formData.message = ''
    setTimeout(() => {
      submitted.success = false
    }, 5000)
  }
}
</script>

<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
    <div v-if="submitted.success" class="success-message" role="alert">
      Thank you! Your message has been sent successfully.
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
      <label class="form-label" for="email">Email <span class="required">*</span></label>
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
      <label class="form-label" for="phone">Phone</label>
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
      <label class="form-label" for="message">Message <span class="required">*</span></label>
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

    <button class="submit-button" type="submit">Send Message</button>
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
  color: #333;
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
</style>
