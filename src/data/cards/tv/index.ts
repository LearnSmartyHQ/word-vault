import type { IOxford } from "../../../types/index.js";

export const dir_tv: Record<string, () => Promise<IOxford>> = {
	tv: () => import("./tv.json") as unknown as Promise<IOxford>,
};
