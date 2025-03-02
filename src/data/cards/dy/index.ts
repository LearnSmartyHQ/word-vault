import type { IOxford } from "../../../types/index.js";

export const dir_dy: Record<string, () => Promise<IOxford>> = {
	dynamic: () => import("./dynamic.json") as unknown as Promise<IOxford>,
};
