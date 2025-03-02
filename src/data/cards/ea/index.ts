import type { IOxford } from "../../../types/index.js";

export const dir_ea: Record<string, () => Promise<IOxford>> = {
	"each-other": () =>
		import("./each-other.json") as unknown as Promise<IOxford>,
	each: () => import("./each.json") as unknown as Promise<IOxford>,
	eager: () => import("./eager.json") as unknown as Promise<IOxford>,
	ear: () => import("./ear.json") as unknown as Promise<IOxford>,
	early: () => import("./early.json") as unknown as Promise<IOxford>,
	earn: () => import("./earn.json") as unknown as Promise<IOxford>,
	earnings: () => import("./earnings.json") as unknown as Promise<IOxford>,
	earth: () => import("./earth.json") as unknown as Promise<IOxford>,
	earthquake: () => import("./earthquake.json") as unknown as Promise<IOxford>,
	ease: () => import("./ease.json") as unknown as Promise<IOxford>,
	easily: () => import("./easily.json") as unknown as Promise<IOxford>,
	east: () => import("./east.json") as unknown as Promise<IOxford>,
	eastern: () => import("./eastern.json") as unknown as Promise<IOxford>,
	easy: () => import("./easy.json") as unknown as Promise<IOxford>,
	eat: () => import("./eat.json") as unknown as Promise<IOxford>,
};
