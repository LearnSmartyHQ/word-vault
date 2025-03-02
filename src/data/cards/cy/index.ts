import type { IOxford } from "../../../types/index.js";

export const dir_cy: Record<string, () => Promise<IOxford>> = {
	cycle: () => import("./cycle.json") as unknown as Promise<IOxford>,
	cynical: () => import("./cynical.json") as unknown as Promise<IOxford>,
};
