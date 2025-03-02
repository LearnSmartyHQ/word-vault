import type { IOxford } from "../../../types/index.js";

export const dir_ye: Record<string, () => Promise<IOxford>> = {
	yeah: () => import("./yeah.json") as unknown as Promise<IOxford>,
	year: () => import("./year.json") as unknown as Promise<IOxford>,
	yell: () => import("./yell.json") as unknown as Promise<IOxford>,
	yellow: () => import("./yellow.json") as unknown as Promise<IOxford>,
	yep: () => import("./yep.json") as unknown as Promise<IOxford>,
	yes: () => import("./yes.json") as unknown as Promise<IOxford>,
	yesterday: () => import("./yesterday.json") as unknown as Promise<IOxford>,
	yet: () => import("./yet.json") as unknown as Promise<IOxford>,
};
