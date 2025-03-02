import type { IOxford } from "../../../types/index.js";

export const dir_od: Record<string, () => Promise<IOxford>> = {
	odd: () => import("./odd.json") as unknown as Promise<IOxford>,
	odds: () => import("./odds.json") as unknown as Promise<IOxford>,
};
