import type { IOxford } from "../../../types/index.js";

export const dir_ug: Record<string, () => Promise<IOxford>> = {
	ugly: () => import("./ugly.json") as unknown as Promise<IOxford>,
};
