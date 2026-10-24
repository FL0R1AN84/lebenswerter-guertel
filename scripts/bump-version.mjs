import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'

const MAX_VERSION_SEGMENT = 9
const VERSION_PATTERN = /^(\d+)\.(\d+)\.(\d+)$/

export function bumpType(message) {
  const subject = message.split('\n')[0] ?? ''
  if (/^(Merge|Revert)\b/.test(subject)) return null

  const match = /^(\w+)(?:\([^)]*\))?(!)?:/.exec(subject)
  if (!match) return null
  return match[1] === 'feat' ? 'minor' : 'patch'
}

export function bumpVersion(version, type) {
  const match = VERSION_PATTERN.exec(version)
  if (!match) {
    throw new Error(`Invalid package version "${version}"; expected MAJOR.MINOR.PATCH.`)
  }

  let [major, minor, patch] = match.slice(1).map(Number)
  if (![major, minor, patch].every(Number.isSafeInteger)) {
    throw new Error(`Package version "${version}" exceeds the supported numeric range.`)
  }

  if (type === 'minor') {
    minor += 1
    patch = 0
  } else if (type === 'patch') {
    patch += 1
  } else {
    throw new Error(`Unsupported version bump type "${type}".`)
  }

  if (patch > MAX_VERSION_SEGMENT) {
    patch = 0
    minor += 1
  }
  if (minor > MAX_VERSION_SEGMENT) {
    minor = 0
    major += 1
  }

  return `${major}.${minor}.${patch}`
}

export function bumpPackageVersion(messageFile) {
  if (!messageFile) {
    throw new Error('Pass a file containing the commit message.')
  }

  const type = bumpType(readFileSync(messageFile, 'utf-8'))
  if (!type) return

  const packagePath = fileURLToPath(new URL('../package.json', import.meta.url))
  const packageJson = readFileSync(packagePath, 'utf-8')
  const currentVersion = /"version":\s*"([^"]+)"/.exec(packageJson)?.[1]
  if (!currentVersion) {
    throw new Error('Could not find a version in package.json.')
  }

  const nextVersion = bumpVersion(currentVersion, type)
  writeFileSync(packagePath, packageJson.replace(`"version": "${currentVersion}"`, `"version": "${nextVersion}"`))
  console.log(`[version] ${currentVersion} -> ${nextVersion}`)
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  bumpPackageVersion(process.argv[2])
}
