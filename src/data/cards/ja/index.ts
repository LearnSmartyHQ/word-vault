import type { IOxford } from "../../../types/index.js";

export const dir_ja: Record<string, () => Promise<IOxford>> = {
	jacket: () => import("./jacket.json") as unknown as Promise<IOxford>,
	jagged: () => import("./jagged.json") as unknown as Promise<IOxford>,
	jail: () => import("./jail.json") as unknown as Promise<IOxford>,
	jam: () => import("./jam.json") as unknown as Promise<IOxford>,
	january: () => import("./january.json") as unknown as Promise<IOxford>,
	jazz: () => import("./jazz.json") as unknown as Promise<IOxford>,
};
