import type { IOxford } from "../../../types/index.js";

export const dir_ke: Record<string, () => Promise<IOxford>> = {
	keen: () => import("./keen.json") as unknown as Promise<IOxford>,
	keep: () => import("./keep.json") as unknown as Promise<IOxford>,
	keg: () => import("./keg.json") as unknown as Promise<IOxford>,
	kettle: () => import("./kettle.json") as unknown as Promise<IOxford>,
	key: () => import("./key.json") as unknown as Promise<IOxford>,
	keyboard: () => import("./keyboard.json") as unknown as Promise<IOxford>,
};
