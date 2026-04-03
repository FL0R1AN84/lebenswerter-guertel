import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { flushPromises, mount } from '@vue/test-utils'
import ContactForm from '../ContactForm.vue'

// Helper: mount the form and return the wrapper
const mountForm = () => mount(ContactForm)

// Helper: fill a field by id
const fillField = async (wrapper: ReturnType<typeof mount>, id: string, value: string) => {
  const el = wrapper.find(`#${id}`)
  await el.setValue(value)
}

// Helper: fill all required fields with valid data
const fillValidForm = async (wrapper: ReturnType<typeof mount>) => {
  await fillField(wrapper, 'name', 'Maria Musterfrau')
  await fillField(wrapper, 'email', 'maria@example.com')
  await fillField(wrapper, 'message', 'Das ist eine ausreichend lange Testnachricht.')
}

// Helper: submit the form
const submitForm = async (wrapper: ReturnType<typeof mount>) => {
  await wrapper.find('form').trigger('submit')
}

describe('ContactForm', () => {
  describe('Rendering', () => {
    it('renders all form fields', () => {
      const wrapper = mountForm()
      expect(wrapper.find('#name').exists()).toBe(true)
      expect(wrapper.find('#email').exists()).toBe(true)
      expect(wrapper.find('#phone').exists()).toBe(true)
      expect(wrapper.find('#message').exists()).toBe(true)
    })

    it('marks name, email and message as required', () => {
      const wrapper = mountForm()
      const labels = wrapper.findAll('.form-label')
      const labelTexts = labels.map((l) => l.text())

      expect(labelTexts.some((t) => t.includes('Name') && t.includes('*'))).toBe(true)
      expect(labelTexts.some((t) => t.includes('E-Mail') && t.includes('*'))).toBe(true)
      expect(labelTexts.some((t) => t.includes('Nachricht') && t.includes('*'))).toBe(true)
    })

    it('does not mark phone as required', () => {
      const wrapper = mountForm()
      const phoneGroup = wrapper.find('#phone').element.closest('.form-group')
      expect(phoneGroup?.querySelector('.required')).toBeNull()
    })

    it('renders the submit button', () => {
      const wrapper = mountForm()
      const btn = wrapper.find('button[type="submit"]')
      expect(btn.exists()).toBe(true)
      expect(btn.text()).toContain('Nachricht senden')
    })

    it('shows no success or error alert on initial render', () => {
      const wrapper = mountForm()
      expect(wrapper.find('[role="alert"]').exists()).toBe(false)
    })
  })

  describe('Validierung', () => {
    it('zeigt Fehler, wenn der Name leer ist', async () => {
      const wrapper = mountForm()
      await fillField(wrapper, 'email', 'test@example.com')
      await fillField(wrapper, 'message', 'Eine ausreichend lange Nachricht.')
      await submitForm(wrapper)

      expect(wrapper.find('#name-error').exists()).toBe(true)
      expect(wrapper.find('#name-error').text()).toContain('Namen')
    })

    it('zeigt Fehler, wenn die E-Mail leer ist', async () => {
      const wrapper = mountForm()
      await fillField(wrapper, 'name', 'Max Mustermann')
      await fillField(wrapper, 'message', 'Eine ausreichend lange Nachricht.')
      await submitForm(wrapper)

      expect(wrapper.find('#email-error').exists()).toBe(true)
    })

    it('zeigt Fehler bei ungültigem E-Mail-Format', async () => {
      const wrapper = mountForm()
      await fillField(wrapper, 'name', 'Max Mustermann')
      await fillField(wrapper, 'email', 'keine-email')
      await fillField(wrapper, 'message', 'Eine ausreichend lange Nachricht.')
      await submitForm(wrapper)

      expect(wrapper.find('#email-error').exists()).toBe(true)
      expect(wrapper.find('#email-error').text()).toContain('ungültig')
    })

    it('akzeptiert eine gültige E-Mail-Adresse', async () => {
      const wrapper = mountForm()
      await fillValidForm(wrapper)
      await submitForm(wrapper)

      expect(wrapper.find('#email-error').exists()).toBe(false)
    })

    it('zeigt Fehler, wenn die Nachricht leer ist', async () => {
      const wrapper = mountForm()
      await fillField(wrapper, 'name', 'Max Mustermann')
      await fillField(wrapper, 'email', 'max@example.com')
      await submitForm(wrapper)

      expect(wrapper.find('#message-error').exists()).toBe(true)
    })

    it('zeigt Fehler, wenn die Nachricht kürzer als 10 Zeichen ist', async () => {
      const wrapper = mountForm()
      await fillField(wrapper, 'name', 'Max Mustermann')
      await fillField(wrapper, 'email', 'max@example.com')
      await fillField(wrapper, 'message', 'Kurz')
      await submitForm(wrapper)

      expect(wrapper.find('#message-error').exists()).toBe(true)
      expect(wrapper.find('#message-error').text()).toContain('10 Zeichen')
    })

    it('zeigt alle Fehler gleichzeitig an, wenn alle Pflichtfelder leer sind', async () => {
      const wrapper = mountForm()
      await submitForm(wrapper)

      expect(wrapper.find('#name-error').exists()).toBe(true)
      expect(wrapper.find('#email-error').exists()).toBe(true)
      expect(wrapper.find('#message-error').exists()).toBe(true)
    })

    it('markiert ungültige Felder mit aria-invalid', async () => {
      const wrapper = mountForm()
      await submitForm(wrapper)

      expect(wrapper.find('#name').attributes('aria-invalid')).toBe('true')
      expect(wrapper.find('#email').attributes('aria-invalid')).toBe('true')
      expect(wrapper.find('#message').attributes('aria-invalid')).toBe('true')
    })

    it('setzt aria-invalid zurück, wenn das Formular gültig ist (kein Fehler bei phone)', async () => {
      const wrapper = mountForm()
      // Phone has no validation, should never be aria-invalid
      await submitForm(wrapper)
      expect(wrapper.find('#phone').attributes('aria-invalid')).toBe('false')
    })

    it('emittiert scrollToSection bei Validierungsfehlern', async () => {
      const wrapper = mountForm()
      await submitForm(wrapper)
      expect(wrapper.emitted('scrollToSection')).toBeTruthy()
    })
  })

  describe('Formularübermittlung', () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.restoreAllMocks()
      vi.useRealTimers()
    })

    it('sendet die Formulardaten per POST an /api/contact.php', async () => {
      const fetchMock = vi.fn().mockResolvedValue({
        ok: true,
        headers: { get: () => 'application/json' },
        json: () => Promise.resolve({ success: true }),
      })
      vi.stubGlobal('fetch', fetchMock)

      const wrapper = mountForm()
      await fillValidForm(wrapper)
      await submitForm(wrapper)
      await vi.runAllTicks()

      expect(fetchMock).toHaveBeenCalledOnce()
      const [url, options] = fetchMock.mock.calls[0]
      expect(url).toBe('/api/contact.php')
      expect(options.method).toBe('POST')
      expect(options.headers['Content-Type']).toBe('application/json')

      const body = JSON.parse(options.body)
      expect(body.name).toBe('Maria Musterfrau')
      expect(body.email).toBe('maria@example.com')
      expect(body.message).toBe('Das ist eine ausreichend lange Testnachricht.')
    })

    it('zeigt Ladezustand während der Übermittlung', async () => {
      let resolveResponse: (value: unknown) => void
      const fetchMock = vi.fn(
        () =>
          new Promise((resolve) => {
            resolveResponse = resolve
          }),
      )
      vi.stubGlobal('fetch', fetchMock)

      const wrapper = mountForm()
      await fillValidForm(wrapper)
      await submitForm(wrapper)

      // During pending request the loading spinner should be visible
      expect(wrapper.find('button[type="submit"]').attributes('disabled')).toBeDefined()
      expect(wrapper.find('.animate-spin').exists()).toBe(true)

      // Resolve the fetch and flush all pending promises + Vue updates
      resolveResponse!({
        ok: true,
        headers: { get: () => 'application/json' },
        json: () => Promise.resolve({ success: true }),
      })
      await flushPromises()

      expect(wrapper.find('.animate-spin').exists()).toBe(false)
    })

    it('zeigt Erfolgsmeldung nach erfolgreicher Übermittlung', async () => {
      vi.stubGlobal('fetch', () =>
        Promise.resolve({
          ok: true,
          headers: { get: () => 'application/json' },
          json: () => Promise.resolve({ success: true }),
        }),
      )

      const wrapper = mountForm()
      await fillValidForm(wrapper)
      await submitForm(wrapper)
      await vi.runAllTicks()

      const alert = wrapper.find('[role="alert"]')
      expect(alert.exists()).toBe(true)
      expect(alert.text()).toContain('erfolgreich gesendet')
    })

    it('leert das Formular nach erfolgreicher Übermittlung', async () => {
      vi.stubGlobal('fetch', () =>
        Promise.resolve({
          ok: true,
          headers: { get: () => 'application/json' },
          json: () => Promise.resolve({ success: true }),
        }),
      )

      const wrapper = mountForm()
      await fillValidForm(wrapper)
      await submitForm(wrapper)
      await vi.runAllTicks()

      expect((wrapper.find('#name').element as HTMLInputElement).value).toBe('')
      expect((wrapper.find('#email').element as HTMLInputElement).value).toBe('')
      expect((wrapper.find('#message').element as HTMLTextAreaElement).value).toBe('')
    })

    it('blendet die Erfolgsmeldung nach 5 Sekunden aus', async () => {
      vi.stubGlobal('fetch', () =>
        Promise.resolve({
          ok: true,
          headers: { get: () => 'application/json' },
          json: () => Promise.resolve({ success: true }),
        }),
      )

      const wrapper = mountForm()
      await fillValidForm(wrapper)
      await submitForm(wrapper)
      await vi.runAllTicks()

      expect(wrapper.find('[role="alert"]').exists()).toBe(true)

      vi.advanceTimersByTime(5000)
      await vi.runAllTicks()

      expect(wrapper.find('[role="alert"]').exists()).toBe(false)
    })

    it('zeigt Fehlermeldung bei Server-Fehler (HTTP 500)', async () => {
      vi.stubGlobal('fetch', () =>
        Promise.resolve({
          ok: false,
          status: 500,
          headers: { get: () => 'text/html' },
        }),
      )

      const wrapper = mountForm()
      await fillValidForm(wrapper)
      await submitForm(wrapper)
      await vi.runAllTicks()

      const alert = wrapper.find('[role="alert"]')
      expect(alert.exists()).toBe(true)
      expect(alert.text()).toContain('Fehler')
    })

    it('zeigt Fehlermeldung bei Netzwerkfehler', async () => {
      vi.stubGlobal('fetch', () => Promise.reject(new Error('Network Error')))

      const wrapper = mountForm()
      await fillValidForm(wrapper)
      await submitForm(wrapper)
      await vi.runAllTicks()

      const alert = wrapper.find('[role="alert"]')
      expect(alert.exists()).toBe(true)
      expect(alert.text()).toContain('Fehler')
    })

    it('blendet die Fehlermeldung nach 5 Sekunden aus', async () => {
      vi.stubGlobal('fetch', () => Promise.reject(new Error('Network Error')))

      const wrapper = mountForm()
      await fillValidForm(wrapper)
      await submitForm(wrapper)
      await vi.runAllTicks()

      expect(wrapper.find('[role="alert"]').exists()).toBe(true)

      vi.advanceTimersByTime(5000)
      await vi.runAllTicks()

      expect(wrapper.find('[role="alert"]').exists()).toBe(false)
    })

    it('emittiert scrollToSection nach erfolgreicher Übermittlung', async () => {
      vi.stubGlobal('fetch', () =>
        Promise.resolve({
          ok: true,
          headers: { get: () => 'application/json' },
          json: () => Promise.resolve({ success: true }),
        }),
      )

      const wrapper = mountForm()
      await fillValidForm(wrapper)
      await submitForm(wrapper)
      await vi.runAllTicks()

      expect(wrapper.emitted('scrollToSection')).toBeTruthy()
    })

    it('zeigt Fehlermeldung bei ungültiger Server-Antwort (kein JSON)', async () => {
      vi.stubGlobal('fetch', () =>
        Promise.resolve({
          ok: true,
          headers: { get: () => 'text/html' },
        }),
      )

      const wrapper = mountForm()
      await fillValidForm(wrapper)
      await submitForm(wrapper)
      await vi.runAllTicks()

      const alert = wrapper.find('[role="alert"]')
      expect(alert.exists()).toBe(true)
      expect(alert.text()).toContain('Fehler')
    })
  })
})

