import type { IOxford } from "../../../types/index.js";

export const dir_go: Record<string, () => Promise<IOxford>> = {
	go: () => import("./go.json") as unknown as Promise<IOxford>,
	goal: () => import("./goal.json") as unknown as Promise<IOxford>,
	god: () => import("./god.json") as unknown as Promise<IOxford>,
	gold: () => import("./gold.json") as unknown as Promise<IOxford>,
	golden: () => import("./golden.json") as unknown as Promise<IOxford>,
	golf: () => import("./golf.json") as unknown as Promise<IOxford>,
	"good-morning": () =>
		import("./good-morning.json") as unknown as Promise<IOxford>,
	"good-night": () =>
		import("./good-night.json") as unknown as Promise<IOxford>,
	good: () => import("./good.json") as unknown as Promise<IOxford>,
	goodbye: () => import("./goodbye.json") as unknown as Promise<IOxford>,
	goodness: () => import("./goodness.json") as unknown as Promise<IOxford>,
	goods: () => import("./goods.json") as unknown as Promise<IOxford>,
	gorgeous: () => import("./gorgeous.json") as unknown as Promise<IOxford>,
	gosh: () => import("./gosh.json") as unknown as Promise<IOxford>,
	govern: () => import("./govern.json") as unknown as Promise<IOxford>,
	governance: () => import("./governance.json") as unknown as Promise<IOxford>,
	government: () => import("./government.json") as unknown as Promise<IOxford>,
	governor: () => import("./governor.json") as unknown as Promise<IOxford>,
};
