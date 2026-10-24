import { describe, expect, it } from 'vitest'
import { bumpType, bumpVersion } from '../bump-version.mjs'

describe('bumpType', () => {
  it('bumps features by minor version', () => {
    expect(bumpType('feat(contact): add a new field')).toBe('minor')
  })

  it('bumps other conventional commits by patch version', () => {
    expect(bumpType('fix: correct validation')).toBe('patch')
    expect(bumpType('chore(deps): update dependencies')).toBe('patch')
  })

  it('skips merge, revert, and non-conventional commits', () => {
    expect(bumpType('Merge pull request #12')).toBeNull()
    expect(bumpType('Revert "feat: add a field"')).toBeNull()
    expect(bumpType('Update the contact page')).toBeNull()
  })
})

describe('bumpVersion', () => {
  it('bumps minor versions and resets patch', () => {
    expect(bumpVersion('1.8.4', 'minor')).toBe('1.9.0')
  })

  it('bumps patch versions', () => {
    expect(bumpVersion('1.8.4', 'patch')).toBe('1.8.5')
  })

  it('rolls version segments over at nine', () => {
    expect(bumpVersion('1.8.9', 'patch')).toBe('1.9.0')
    expect(bumpVersion('1.9.9', 'patch')).toBe('2.0.0')
  })
})
