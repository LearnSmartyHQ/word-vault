import type { IOxford } from "../../../types/index.js";

export const dir_is: Record<string, () => Promise<IOxford>> = {
	island: () => import("./island.json") as unknown as Promise<IOxford>,
	isolate: () => import("./isolate.json") as unknown as Promise<IOxford>,
	isolated: () => import("./isolated.json") as unknown as Promise<IOxford>,
	isolation: () => import("./isolation.json") as unknown as Promise<IOxford>,
	issue: () => import("./issue.json") as unknown as Promise<IOxford>,
};
