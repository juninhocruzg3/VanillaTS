import { existsSync, mkdirSync, cp } from "fs";
// import { getVanillaTSOption } from "./utils.mjs";

// mkdir -p dist
if (existsSync("dist")) {
	console.info('"dist" folder already exists.');
} else {
	mkdirSync("dist");
	console.info('"dist" folder was created.');
}

// getVanillaTSOption("statics").forEach((file) => {
// 	if (typeof file === "string" || file.type !== "folder") {
// 		// cp src/$FILE dist/
// 		cp(`public/${file}`, `dist/${file}`, () => {
// 			console.info(`"${file}" was copied.`);
// 		});
// 	} else {
// 		// cp src/assets -R dist/
// 		cp(`public/${file.path}`, `dist/${file.path}`, { recursive: true }, () => {
// 			console.info(`"${file.path}" folder was copied.`);
// 		});
// 	}
// });

// cp public/* dist/
cp(`public`, "dist", { recursive: true }, () => {
	console.info(`"public" folder was copied.`);
});
