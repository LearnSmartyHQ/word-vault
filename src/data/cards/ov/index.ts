import type { IOxford } from "../../../types/index.js";

export const dir_ov: Record<string, () => Promise<IOxford>> = {
	oven: () => import("./oven.json") as unknown as Promise<IOxford>,
	over: () => import("./over.json") as unknown as Promise<IOxford>,
	overall: () => import("./overall.json") as unknown as Promise<IOxford>,
	overcome: () => import("./overcome.json") as unknown as Promise<IOxford>,
	overlook: () => import("./overlook.json") as unknown as Promise<IOxford>,
	overly: () => import("./overly.json") as unknown as Promise<IOxford>,
	overnight: () => import("./overnight.json") as unknown as Promise<IOxford>,
	overseas: () => import("./overseas.json") as unknown as Promise<IOxford>,
	oversee: () => import("./oversee.json") as unknown as Promise<IOxford>,
	overtime: () => import("./overtime.json") as unknown as Promise<IOxford>,
	overturn: () => import("./overturn.json") as unknown as Promise<IOxford>,
	overwhelm: () => import("./overwhelm.json") as unknown as Promise<IOxford>,
	overwhelming: () =>
		import("./overwhelming.json") as unknown as Promise<IOxford>,
};
