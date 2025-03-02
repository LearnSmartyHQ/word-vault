import type { IOxford } from "../../../types/index.js";

export const dir_ze: Record<string, () => Promise<IOxford>> = {
	zero: () => import("./zero.json") as unknown as Promise<IOxford>,
};
