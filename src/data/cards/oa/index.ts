import type { IOxford } from "../../../types/index.js";

export const dir_oa: Record<string, () => Promise<IOxford>> = {
	oath: () => import("./oath.json") as unknown as Promise<IOxford>,
};
