import type { IOxford } from "../../../types/index.js";

export const dir_ig: Record<string, () => Promise<IOxford>> = {
	ignite: () => import("./ignite.json") as unknown as Promise<IOxford>,
	ignorance: () => import("./ignorance.json") as unknown as Promise<IOxford>,
	ignore: () => import("./ignore.json") as unknown as Promise<IOxford>,
};
