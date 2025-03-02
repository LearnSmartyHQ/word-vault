import type { IOxford } from "../../../types/index.js";

export const dir_ts: Record<string, () => Promise<IOxford>> = {
	tsunami: () => import("./tsunami.json") as unknown as Promise<IOxford>,
};
