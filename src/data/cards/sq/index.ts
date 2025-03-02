import type { IOxford } from "../../../types/index.js";

export const dir_sq: Record<string, () => Promise<IOxford>> = {
	squad: () => import("./squad.json") as unknown as Promise<IOxford>,
	squander: () => import("./squander.json") as unknown as Promise<IOxford>,
	square: () => import("./square.json") as unknown as Promise<IOxford>,
	squeeze: () => import("./squeeze.json") as unknown as Promise<IOxford>,
};
