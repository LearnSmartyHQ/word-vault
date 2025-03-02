import type { IOxford } from "../../../types/index.js";

export const dir_ae: Record<string, () => Promise<IOxford>> = {
	aesthetic: () => import("./aesthetic.json") as unknown as Promise<IOxford>,
};
