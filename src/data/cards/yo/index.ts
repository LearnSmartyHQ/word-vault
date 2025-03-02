import type { IOxford } from "../../../types/index.js";

export const dir_yo: Record<string, () => Promise<IOxford>> = {
	you: () => import("./you.json") as unknown as Promise<IOxford>,
	young: () => import("./young.json") as unknown as Promise<IOxford>,
	youngster: () => import("./youngster.json") as unknown as Promise<IOxford>,
	your: () => import("./your.json") as unknown as Promise<IOxford>,
	yours: () => import("./yours.json") as unknown as Promise<IOxford>,
	yourself: () => import("./yourself.json") as unknown as Promise<IOxford>,
	youth: () => import("./youth.json") as unknown as Promise<IOxford>,
};
