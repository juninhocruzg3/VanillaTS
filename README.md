# VanillaTS - The modern vanilla web developer's platform.

VanillaTS is a fast, lightweight, cross-platform development framework for building mobile and desktop web applications using Typescript/Javascript and other languages.

<hr>

## Documentation

Get started with VanillaTS, learn the fundamentals and explore advanced topics on our documentation.

- Get started (soon...)
- Architecture (soon...)
- Components (soon...)

### Advanced

- Microfrontend (soon...)

## Development Setup

### Prerequisites

- Install [Node.js] which includes a package manager (eg: [npm], [yarn])

OR

- Install [Docker] engine

### Setting Up a Project

- clone this repository

```sh
git clone git@github.com:juninhocruzg3/VanillaTS.git
```

- rename the project name on `package.json`
- rename the title head tag on `index.html`
- run on dev mode:

  - Node:
    ```sh
        npm install
        npm run dev
    ```
  - Node by `vanilla-ts`:
    ```sh
        npm install -g @vanilla-ts/cli
        npm install
        vts serve
    ```
  - Make:
    ```sh
        make dev
    ```
  - Docker:
    ```sh
        make docker-dev
    ```

<hr>

VanillaTS is cross-platform, fast, lightweight, scalable and is loved by millions.

You might want to try [VanillaTS CLI].

[cli]: https://nodejs.org
[architecture]: https://vanilla-js.com
[components]: https://vanilla-js.com
[node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/get-npm
[yarn]: https://yarnpkg.com/
[vanillats cli]: https://www.npmjs.com/package/@vanilla-ts/cli
[docker]: https://docs.docker.com/engine/install/
