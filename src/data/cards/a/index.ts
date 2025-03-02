import type { IOxford } from "../../../types/index.js";

export const dir_a: Record<string, () => Promise<IOxford>> = {
	a: () => import("./a.json") as unknown as Promise<IOxford>,
};
