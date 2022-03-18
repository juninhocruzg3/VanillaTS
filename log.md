# Logs

## Setup TypeScript

- Install typescript library

```sh
	npm i -D typescript
```

- Configure TS options

```sh
	npx tsc --init
```

```json
	"outDir": "./dist",
	"rootDir": "./src"
```

## Setup Static Files

- Create `clean.js`, `clean-all.js` and `cp-statics.js` scripts to copy statics files to `dist` folder
- Create NPM Scripts to run project cleaner and builder

```sh
	npm i -D npm-run-all
```

```json
	"build": "npm-run-all -s clean ts cp-statics",
    "ts": "tsc",
    "cp-statics": "node scripts/cp-statics.js",
    "clean": "node scripts/clean.js",
    "clean:all": "node scripts/clean-all.js"
```

## Setup DevRunner

- Add [chokidar] package to watch changes and [browser-sync] package to server it.

```sh
	npm install -D chokidar browser-sync
```

- add `watch.js` script
- Create NPM Scripts to run project watcher and server

```json
	"dev": "npm run build && npm-run-all -p watch",
	"watch": "node scripts/watch.js",
	"serve": "browser-sync start --serve --files 'dist/*'"
```

## Add AppRoot Component

- create the first component to the project: `<app-root></app-root>` on `index.ts` and import it on `index.html`

## Add Docker environment

- create a Docker folder, to run code inner a container.
  - now you can run this project just installing Docker and running `make docker-dev`

## Setup Webpack

- add `webpack` and `webpack-cli` packages
- create the `webpack.config.js` file
- change scripts to extension `*.mjs`
- separate static files to folder `public` and change it on scripts
- create a second component to examplify component imports

## Setup HTML imports

- add `typings/html.d.ts` file
- add an HTML import example on ExampleComponent

[chokidar]: https://www.npmjs.com/package/chokidar
[browser-sync]: https://browsersync.io/
