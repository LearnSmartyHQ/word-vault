import type { IOxford } from "../../../types/index.js";

export const dir_ah: Record<string, () => Promise<IOxford>> = {
	ah: () => import("./ah.json") as unknown as Promise<IOxford>,
	ahead: () => import("./ahead.json") as unknown as Promise<IOxford>,
};
