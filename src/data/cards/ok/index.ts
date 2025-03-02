import type { IOxford } from "../../../types/index.js";

export const dir_ok: Record<string, () => Promise<IOxford>> = {
	ok: () => import("./ok.json") as unknown as Promise<IOxford>,
};
