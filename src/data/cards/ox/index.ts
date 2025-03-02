import type { IOxford } from "../../../types/index.js";

export const dir_ox: Record<string, () => Promise<IOxford>> = {
	oxygen: () => import("./oxygen.json") as unknown as Promise<IOxford>,
};
