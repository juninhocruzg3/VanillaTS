import { watch } from "chokidar";
import { exec } from "child_process";
import { getVanillaTSOption } from "./utils.mjs";
import browserSync from "browser-sync";
import { cp } from "fs";

// watch TS files
watch("src/**/*").on("change", (event) => {
	console.log("watcher: ", event);
	exec("npm run webpack", undefined).stdout.pipe(process.stdout);
});

// // watch static files
// getVanillaTSOption("statics").forEach((file) => {
// 	if (typeof file === "string" || file.type !== "folder") {
// 		watch(`public/${file}`).on("change", () => {
// 			// cp src/$FILE -f dist/
// 			cp(`public/${file}`, `dist/${file}`, { force: true }, () => {
// 				console.info(`"${file}" was copied.`);
// 			});
// 		});
// 	} else {
// 		watch(`public/${file.path}/*`).on("change", () => {
// 			// cp src/assets -R dist/
// 			cp(
// 				`public/${file.path}`,
// 				`dist/${file.path}`,
// 				{ recursive: true, force: true },
// 				() => {
// 					console.info(`"${file.path}" folder was copied.`);
// 				}
// 			);
// 		});
// 	}
// });

// watch public files
watch(`public/*`).on("change", (file) => {
	console.log("file changed: ", file);
	const path = file.split("/");
	path[0] = "dist";
	const dest = path.join("/");
	// cp public -R dist
	cp(file, dest, { recursive: true, force: true }, () => {
		console.info(`"${file}" was copied to ${dest}`);
	});
});

browserSync.init(
	{
		server: "dist",
		injectChanges: true,
		port: process.env.PORT || 8080,
		ui: {
			port: 8756,
		},
		watch: true,
		open: false,
	},
	(err, bs) => {
		if (err) {
			return console.error(err);
		}
		// first serve
		console.info(`VanillaTS is listening on port ${bs.getOption("port")}`);

		// on reload after changes
		bs.emitter.on("browser:reload", () => {
			console.info(`VanillaTS is listening on port ${bs.getOption("port")}`);
		});

		// on client connection
		bs.emitter.on("client:connected", (event) => {
			console.log("Client connected: ", event);
		});

		// on dist file was changed
		bs.emitter.on("file:changed", (event) => {
			console.log("File was changed: ", event.path);
		});

		// unknown events
		bs.emitter.on("file:watching", (event) => {
			console.log("Emitted: " + "file:watching", event);
		});
		bs.emitter.on("file:reload", (event) => {
			console.log("Emitted: " + "file:reload", event);
		});
		bs.emitter.on("service:exit", (event) => {
			console.log("Emitted: " + "service:exit", event);
		});
		bs.emitter.on("browser:error", (event) => {
			console.log("Emitted: " + "browser:error", event);
		});
		bs.emitter.on("stream:changed", (event) => {
			console.log("Emitted: " + "stream:changed", event);
		});
		bs.emitter.on("service:running", (event) => {
			console.log("Emitted: " + "service:running", event);
		});
		bs.emitter.on("browser:notify", (event) => {
			console.log("Emitted: " + "browser:notify", event);
		});
		bs.emitter.on("options:set", (event) => {
			console.log("Emitted: " + "options:set", event);
		});
		bs.emitter.on("plugins:configure", (event) => {
			console.log("Emitted: " + "plugins:configure", event);
		});
		bs.emitter.on("plugins:opts", (event) => {
			console.log("Emitted: " + "plugins:opts", event);
		});
		bs.emitter.on("_browser:reload", (event) => {
			console.log("Emitted: " + "_browser:reload", event);
		});
	}
);
