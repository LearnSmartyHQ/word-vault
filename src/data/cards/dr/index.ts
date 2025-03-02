import type { IOxford } from "../../../types/index.js";

export const dir_dr: Record<string, () => Promise<IOxford>> = {
	draft: () => import("./draft.json") as unknown as Promise<IOxford>,
	drag: () => import("./drag.json") as unknown as Promise<IOxford>,
	drain: () => import("./drain.json") as unknown as Promise<IOxford>,
	drama: () => import("./drama.json") as unknown as Promise<IOxford>,
	dramatic: () => import("./dramatic.json") as unknown as Promise<IOxford>,
	dramatically: () =>
		import("./dramatically.json") as unknown as Promise<IOxford>,
	draw: () => import("./draw.json") as unknown as Promise<IOxford>,
	drawer: () => import("./drawer.json") as unknown as Promise<IOxford>,
	drawing: () => import("./drawing.json") as unknown as Promise<IOxford>,
	dread: () => import("./dread.json") as unknown as Promise<IOxford>,
	dream: () => import("./dream.json") as unknown as Promise<IOxford>,
	drench: () => import("./drench.json") as unknown as Promise<IOxford>,
	dress: () => import("./dress.json") as unknown as Promise<IOxford>,
	dressed: () => import("./dressed.json") as unknown as Promise<IOxford>,
	drift: () => import("./drift.json") as unknown as Promise<IOxford>,
	drink: () => import("./drink.json") as unknown as Promise<IOxford>,
	drive: () => import("./drive.json") as unknown as Promise<IOxford>,
	driver: () => import("./driver.json") as unknown as Promise<IOxford>,
	driving: () => import("./driving.json") as unknown as Promise<IOxford>,
	drop: () => import("./drop.json") as unknown as Promise<IOxford>,
	drought: () => import("./drought.json") as unknown as Promise<IOxford>,
	drown: () => import("./drown.json") as unknown as Promise<IOxford>,
	drug: () => import("./drug.json") as unknown as Promise<IOxford>,
	drum: () => import("./drum.json") as unknown as Promise<IOxford>,
	drunk: () => import("./drunk.json") as unknown as Promise<IOxford>,
	dry: () => import("./dry.json") as unknown as Promise<IOxford>,
};
