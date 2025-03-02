import type { IOxford } from "../../../types/index.js";

export const dir_lu: Record<string, () => Promise<IOxford>> = {
	lubricate: () => import("./lubricate.json") as unknown as Promise<IOxford>,
	luck: () => import("./luck.json") as unknown as Promise<IOxford>,
	luckily: () => import("./luckily.json") as unknown as Promise<IOxford>,
	lucky: () => import("./lucky.json") as unknown as Promise<IOxford>,
	lump: () => import("./lump.json") as unknown as Promise<IOxford>,
	lunatic: () => import("./lunatic.json") as unknown as Promise<IOxford>,
	lunch: () => import("./lunch.json") as unknown as Promise<IOxford>,
	lunchtime: () => import("./lunchtime.json") as unknown as Promise<IOxford>,
	lung: () => import("./lung.json") as unknown as Promise<IOxford>,
	luxury: () => import("./luxury.json") as unknown as Promise<IOxford>,
};
