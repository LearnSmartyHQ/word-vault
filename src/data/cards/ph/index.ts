import type { IOxford } from "../../../types/index.js";

export const dir_ph: Record<string, () => Promise<IOxford>> = {
	pharmacy: () => import("./pharmacy.json") as unknown as Promise<IOxford>,
	phase: () => import("./phase.json") as unknown as Promise<IOxford>,
	phenomenon: () => import("./phenomenon.json") as unknown as Promise<IOxford>,
	philosopher: () =>
		import("./philosopher.json") as unknown as Promise<IOxford>,
	philosophical: () =>
		import("./philosophical.json") as unknown as Promise<IOxford>,
	philosophy: () => import("./philosophy.json") as unknown as Promise<IOxford>,
	phone: () => import("./phone.json") as unknown as Promise<IOxford>,
	photo: () => import("./photo.json") as unknown as Promise<IOxford>,
	photocopy: () => import("./photocopy.json") as unknown as Promise<IOxford>,
	photograph: () => import("./photograph.json") as unknown as Promise<IOxford>,
	photographer: () =>
		import("./photographer.json") as unknown as Promise<IOxford>,
	photography: () =>
		import("./photography.json") as unknown as Promise<IOxford>,
	phrase: () => import("./phrase.json") as unknown as Promise<IOxford>,
	physical: () => import("./physical.json") as unknown as Promise<IOxford>,
	physically: () => import("./physically.json") as unknown as Promise<IOxford>,
	physician: () => import("./physician.json") as unknown as Promise<IOxford>,
	physics: () => import("./physics.json") as unknown as Promise<IOxford>,
};
