import type { IOxford } from "../../../types/index.js";

export const dir_i: Record<string, () => Promise<IOxford>> = {
	i: () => import("./i.json") as unknown as Promise<IOxford>,
};
