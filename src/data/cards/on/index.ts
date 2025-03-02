import type { IOxford } from "../../../types/index.js";

export const dir_on: Record<string, () => Promise<IOxford>> = {
	on: () => import("./on.json") as unknown as Promise<IOxford>,
	once: () => import("./once.json") as unknown as Promise<IOxford>,
	"one-another": () =>
		import("./one-another.json") as unknown as Promise<IOxford>,
	one: () => import("./one.json") as unknown as Promise<IOxford>,
	ongoing: () => import("./ongoing.json") as unknown as Promise<IOxford>,
	onion: () => import("./onion.json") as unknown as Promise<IOxford>,
	online: () => import("./online.json") as unknown as Promise<IOxford>,
	only: () => import("./only.json") as unknown as Promise<IOxford>,
	onto: () => import("./onto.json") as unknown as Promise<IOxford>,
};
