# Bootstrap

## Setup TypeScript

- Install typescript library

```bash
	npm i -D typescript
```

- Configure TS options
```bash
	npx tsc --init
```
```json
	"outDir": "./dist",
	"rootDir": "./src"
```

## Setup Static Files

- Create JS scripts to copy statics files to `dist` folder
- Create Node Scripts to call on clean and build project
```bash
	npm i -D npm-run-all
```
```json
	"build": "npm-run-all -s clean ts cp-statics",
    "ts": "tsc",
    "cp-statics": "node scripts/cp-statics.js",
    "clean": "node scripts/clean.js",
    "clean:all": "node scripts/clean-all.js"
```