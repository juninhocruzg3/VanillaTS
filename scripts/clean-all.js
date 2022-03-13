import { rm } from 'fs';

// rm -rf dist
rm('dist', { recursive: true, force: true }, () => {
	console.info('"dist" folder was deleted.');
});

//rm -rf node_modules
rm('node_modules', { recursive: true, force: true }, () => {
	console.info('"node_modules" folder was deleted.');
});
