import type { IOxford } from "../../../types/index.js";

export const dir_yi: Record<string, () => Promise<IOxford>> = {
	yield: () => import("./yield.json") as unknown as Promise<IOxford>,
};
