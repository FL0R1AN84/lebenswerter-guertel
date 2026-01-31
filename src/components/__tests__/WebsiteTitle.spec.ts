import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import WebsiteTitle from '../WebsiteTitle.vue'

describe('WebsiteTitle', () => {
  it('renders properly', () => {
    const wrapper = mount(WebsiteTitle)
    expect(wrapper.text()).toContain('Lebenswerter Gürtel')
  })
})
