# Day 01

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

[chokidar]: https://www.npmjs.com/package/chokidar
[browser-sync]: https://browsersync.io/
