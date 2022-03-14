import { watch } from 'chokidar';
import { exec } from 'child_process';
import { getVanillaTSOption } from './utils.js';
import browserSync from 'browser-sync';
import { cp } from 'fs';

// watch TS files
watch('src/**/*.ts').on('change', (event) => {
	console.log('watcher: ', event);
	exec('npm run ts');
});

// watch static files
getVanillaTSOption('statics').forEach((file) => {
	if (typeof file === 'string' || file.type !== 'folder') {
		watch(`src/${file}`).on('change', () => {
			// cp src/$FILE -f dist/
			cp(`src/${file}`, `dist/${file}`, { force: true }, () => {
				console.info(`"${file}" was copied.`);
			});
		});
	} else {
		watch(`src/${file.path}/*`).on('change', () => {
			// cp src/assets -R dist/
			cp(
				`src/${file.path}`,
				`dist/${file.path}`,
				{ recursive: true, force: true },
				() => {
					console.info(`"${file.path}" folder was copied.`);
				}
			);
		});
	}
});

browserSync.init(
	{
		server: 'dist',
		injectChanges: true,
		port: getVanillaTSOption('serve').port,
		ui: {
			port: 8756,
		},
		watch: true,
	},
	(err, bs) => {
		if (err) {
			return console.error(err);
		}
		// first serve
		console.info(`VanillaTS is listening on port ${bs.getOption('port')}`);

		// on reload after changes
		bs.emitter.on('browser:reload', () => {
			console.info(`VanillaTS is listening on port ${bs.getOption('port')}`);
		});

		// on client connection
		bs.emitter.on('client:connected', (event) => {
			console.log('Client connected: ', event);
		});

		// on dist file was changed
		bs.emitter.on('file:changed', (event) => {
			console.log('File was changed: ', event.path);
		});

		// unknown events
		bs.emitter.on('file:watching', (event) => {
			console.log('Emitted: ' + 'file:watching', event);
		});
		bs.emitter.on('file:reload', (event) => {
			console.log('Emitted: ' + 'file:reload', event);
		});
		bs.emitter.on('service:exit', (event) => {
			console.log('Emitted: ' + 'service:exit', event);
		});
		bs.emitter.on('browser:error', (event) => {
			console.log('Emitted: ' + 'browser:error', event);
		});
		bs.emitter.on('stream:changed', (event) => {
			console.log('Emitted: ' + 'stream:changed', event);
		});
		bs.emitter.on('service:running', (event) => {
			console.log('Emitted: ' + 'service:running', event);
		});
		bs.emitter.on('browser:notify', (event) => {
			console.log('Emitted: ' + 'browser:notify', event);
		});
		bs.emitter.on('options:set', (event) => {
			console.log('Emitted: ' + 'options:set', event);
		});
		bs.emitter.on('plugins:configure', (event) => {
			console.log('Emitted: ' + 'plugins:configure', event);
		});
		bs.emitter.on('plugins:opts', (event) => {
			console.log('Emitted: ' + 'plugins:opts', event);
		});
		bs.emitter.on('_browser:reload', (event) => {
			console.log('Emitted: ' + '_browser:reload', event);
		});
	}
);
