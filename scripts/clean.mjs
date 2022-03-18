import { rm } from "fs";

// rm -rf dist
rm("dist", { recursive: true, force: true }, () => {
	console.info('"dist" folder was deleted.');
});
