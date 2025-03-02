import type { IOxford } from "../../../types/index.js";

export const dir_um: Record<string, () => Promise<IOxford>> = {
	umbrella: () => import("./umbrella.json") as unknown as Promise<IOxford>,
};
