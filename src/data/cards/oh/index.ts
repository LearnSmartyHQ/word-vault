import type { IOxford } from "../../../types/index.js";

export const dir_oh: Record<string, () => Promise<IOxford>> = {
	oh: () => import("./oh.json") as unknown as Promise<IOxford>,
};
