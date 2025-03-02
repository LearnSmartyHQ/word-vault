import type { IOxford } from "../../../types/index.js";

export const dir_cd: Record<string, () => Promise<IOxford>> = {
	cd: () => import("./cd.json") as unknown as Promise<IOxford>,
};
