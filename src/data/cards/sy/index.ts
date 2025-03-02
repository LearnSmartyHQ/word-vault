import type { IOxford } from "../../../types/index.js";

export const dir_sy: Record<string, () => Promise<IOxford>> = {
	symbol: () => import("./symbol.json") as unknown as Promise<IOxford>,
	symbolic: () => import("./symbolic.json") as unknown as Promise<IOxford>,
	sympathetic: () =>
		import("./sympathetic.json") as unknown as Promise<IOxford>,
	sympathy: () => import("./sympathy.json") as unknown as Promise<IOxford>,
	symptom: () => import("./symptom.json") as unknown as Promise<IOxford>,
	synchronize: () =>
		import("./synchronize.json") as unknown as Promise<IOxford>,
	syndrome: () => import("./syndrome.json") as unknown as Promise<IOxford>,
	synthesis: () => import("./synthesis.json") as unknown as Promise<IOxford>,
	system: () => import("./system.json") as unknown as Promise<IOxford>,
	systematic: () => import("./systematic.json") as unknown as Promise<IOxford>,
};
