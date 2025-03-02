import type { IOxford } from "../../../types/index.js";

export const dir_hi: Record<string, () => Promise<IOxford>> = {
	hi: () => import("./hi.json") as unknown as Promise<IOxford>,
	hidden: () => import("./hidden.json") as unknown as Promise<IOxford>,
	hide: () => import("./hide.json") as unknown as Promise<IOxford>,
	hierarchy: () => import("./hierarchy.json") as unknown as Promise<IOxford>,
	"high-profile": () =>
		import("./high-profile.json") as unknown as Promise<IOxford>,
	high: () => import("./high.json") as unknown as Promise<IOxford>,
	highlight: () => import("./highlight.json") as unknown as Promise<IOxford>,
	highly: () => import("./highly.json") as unknown as Promise<IOxford>,
	highway: () => import("./highway.json") as unknown as Promise<IOxford>,
	hilarious: () => import("./hilarious.json") as unknown as Promise<IOxford>,
	hill: () => import("./hill.json") as unknown as Promise<IOxford>,
	him: () => import("./him.json") as unknown as Promise<IOxford>,
	himself: () => import("./himself.json") as unknown as Promise<IOxford>,
	hinder: () => import("./hinder.json") as unknown as Promise<IOxford>,
	hint: () => import("./hint.json") as unknown as Promise<IOxford>,
	hip: () => import("./hip.json") as unknown as Promise<IOxford>,
	hire: () => import("./hire.json") as unknown as Promise<IOxford>,
	his: () => import("./his.json") as unknown as Promise<IOxford>,
	historian: () => import("./historian.json") as unknown as Promise<IOxford>,
	historic: () => import("./historic.json") as unknown as Promise<IOxford>,
	historical: () => import("./historical.json") as unknown as Promise<IOxford>,
	history: () => import("./history.json") as unknown as Promise<IOxford>,
	hit: () => import("./hit.json") as unknown as Promise<IOxford>,
};
