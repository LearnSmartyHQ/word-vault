import type { IOxford } from "../../../types/index.js";

export const dir_ci: Record<string, () => Promise<IOxford>> = {
	cigarette: () => import("./cigarette.json") as unknown as Promise<IOxford>,
	cinema: () => import("./cinema.json") as unknown as Promise<IOxford>,
	circle: () => import("./circle.json") as unknown as Promise<IOxford>,
	circuit: () => import("./circuit.json") as unknown as Promise<IOxford>,
	circulate: () => import("./circulate.json") as unknown as Promise<IOxford>,
	circulation: () =>
		import("./circulation.json") as unknown as Promise<IOxford>,
	circumstance: () =>
		import("./circumstance.json") as unknown as Promise<IOxford>,
	cite: () => import("./cite.json") as unknown as Promise<IOxford>,
	citizen: () => import("./citizen.json") as unknown as Promise<IOxford>,
	citizenship: () =>
		import("./citizenship.json") as unknown as Promise<IOxford>,
	city: () => import("./city.json") as unknown as Promise<IOxford>,
	civic: () => import("./civic.json") as unknown as Promise<IOxford>,
	civil: () => import("./civil.json") as unknown as Promise<IOxford>,
	civilian: () => import("./civilian.json") as unknown as Promise<IOxford>,
	civilization: () =>
		import("./civilization.json") as unknown as Promise<IOxford>,
};
