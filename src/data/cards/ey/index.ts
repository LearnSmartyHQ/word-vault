import type { IOxford } from "../../../types/index.js";

export const dir_ey: Record<string, () => Promise<IOxford>> = {
	eye: () => import("./eye.json") as unknown as Promise<IOxford>,
};
