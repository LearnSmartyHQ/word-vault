import type { IOxford } from "../../../types/index.js";

export const dir_il: Record<string, () => Promise<IOxford>> = {
	ill: () => import("./ill.json") as unknown as Promise<IOxford>,
	illegal: () => import("./illegal.json") as unknown as Promise<IOxford>,
	illness: () => import("./illness.json") as unknown as Promise<IOxford>,
	illusion: () => import("./illusion.json") as unknown as Promise<IOxford>,
	illustrate: () => import("./illustrate.json") as unknown as Promise<IOxford>,
	illustration: () =>
		import("./illustration.json") as unknown as Promise<IOxford>,
};
