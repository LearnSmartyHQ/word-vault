import type { IOxford } from "../../../types/index.js";

export const dir_ef: Record<string, () => Promise<IOxford>> = {
	effect: () => import("./effect.json") as unknown as Promise<IOxford>,
	effective: () => import("./effective.json") as unknown as Promise<IOxford>,
	effectively: () =>
		import("./effectively.json") as unknown as Promise<IOxford>,
	effectiveness: () =>
		import("./effectiveness.json") as unknown as Promise<IOxford>,
	efficiency: () => import("./efficiency.json") as unknown as Promise<IOxford>,
	efficient: () => import("./efficient.json") as unknown as Promise<IOxford>,
	efficiently: () =>
		import("./efficiently.json") as unknown as Promise<IOxford>,
	effort: () => import("./effort.json") as unknown as Promise<IOxford>,
};
