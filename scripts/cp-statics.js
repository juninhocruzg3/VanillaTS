import { existsSync, rmSync, mkdirSync, cp } from 'fs';

// mkdir -p dist
if (existsSync('dist')) {
    console.info('"dist" folder already exists.');
} else {
    mkdirSync('dist')
    console.info('"dist" folder was created.');
}

// cp src/index.html dist/
cp('src/index.html', 'dist/index.html', () => {
    console.info('"index.html" was copied.');
});

// cp src/favicon.ico dist/
cp('src/favicon.ico', 'dist/favicon.ico', () => {
    console.info('"favicon.ico" was copied.');
});

// cp src/assets -R dist/
cp('src/assets', 'dist/assets', { recursive: true }, () => {
    console.info('"assets" folder was copied.');
});
