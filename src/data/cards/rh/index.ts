import type { IOxford } from "../../../types/index.js";

export const dir_rh: Record<string, () => Promise<IOxford>> = {
	rhetoric: () => import("./rhetoric.json") as unknown as Promise<IOxford>,
	rhythm: () => import("./rhythm.json") as unknown as Promise<IOxford>,
};
