import type { IOxford } from "../../../types/index.js";

export const dir_if: Record<string, () => Promise<IOxford>> = {
	if: () => import("./if.json") as unknown as Promise<IOxford>,
};
