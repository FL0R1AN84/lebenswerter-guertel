# lebenswerter-guertel

![Website](docs/assets/01.webp)

## Dependency Management

This project uses [Renovate](https://docs.renovatebot.com/) to keep dependencies up to date automatically. Renovate
targets the `develop` branch and opens pull requests for all dependency updates — major, minor, and patch — with
automerge enabled.

Before any pull request can be automerged, the following GitHub Actions workflows run automatically:

- **Unit Tests** (`vitest.yml`): Runs all Vitest unit tests on every pull request targeting `main` or `develop`.
- **Build** (`build.yml`): Installs dependencies and builds the project on every pull request targeting `main` or
  `develop`.

This guarantees that no dependency update is merged unless all tests pass and the project builds successfully.

