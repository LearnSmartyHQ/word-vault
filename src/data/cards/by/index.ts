import type { IOxford } from "../../../types/index.js";

export const dir_by: Record<string, () => Promise<IOxford>> = {
	by: () => import("./by.json") as unknown as Promise<IOxford>,
	bye: () => import("./bye.json") as unknown as Promise<IOxford>,
};
