import type { IOxford } from "../../../types/index.js";

export const dir_or: Record<string, () => Promise<IOxford>> = {
	or: () => import("./or.json") as unknown as Promise<IOxford>,
	oral: () => import("./oral.json") as unknown as Promise<IOxford>,
	orange: () => import("./orange.json") as unknown as Promise<IOxford>,
	orchestra: () => import("./orchestra.json") as unknown as Promise<IOxford>,
	order: () => import("./order.json") as unknown as Promise<IOxford>,
	ordinary: () => import("./ordinary.json") as unknown as Promise<IOxford>,
	organ: () => import("./organ.json") as unknown as Promise<IOxford>,
	organic: () => import("./organic.json") as unknown as Promise<IOxford>,
	organization: () =>
		import("./organization.json") as unknown as Promise<IOxford>,
	organizational: () =>
		import("./organizational.json") as unknown as Promise<IOxford>,
	organize: () => import("./organize.json") as unknown as Promise<IOxford>,
	organized: () => import("./organized.json") as unknown as Promise<IOxford>,
	organizer: () => import("./organizer.json") as unknown as Promise<IOxford>,
	orientation: () =>
		import("./orientation.json") as unknown as Promise<IOxford>,
	origin: () => import("./origin.json") as unknown as Promise<IOxford>,
	original: () => import("./original.json") as unknown as Promise<IOxford>,
	originally: () => import("./originally.json") as unknown as Promise<IOxford>,
	originate: () => import("./originate.json") as unknown as Promise<IOxford>,
};
