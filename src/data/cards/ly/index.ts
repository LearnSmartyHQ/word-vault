import type { IOxford } from "../../../types/index.js";

export const dir_ly: Record<string, () => Promise<IOxford>> = {
	lyric: () => import("./lyric.json") as unknown as Promise<IOxford>,
};
