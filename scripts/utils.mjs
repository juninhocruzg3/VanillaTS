import { readFileSync } from 'fs';

export function getVanillaTSOption(option) {
	return JSON.parse(readFileSync('vanilla-ts.json'))[option];
}
