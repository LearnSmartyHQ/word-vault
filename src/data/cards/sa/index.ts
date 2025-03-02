import type { IOxford } from "../../../types/index.js";

export const dir_sa: Record<string, () => Promise<IOxford>> = {
	sack: () => import("./sack.json") as unknown as Promise<IOxford>,
	sacred: () => import("./sacred.json") as unknown as Promise<IOxford>,
	sacrifice: () => import("./sacrifice.json") as unknown as Promise<IOxford>,
	sad: () => import("./sad.json") as unknown as Promise<IOxford>,
	sadly: () => import("./sadly.json") as unknown as Promise<IOxford>,
	safe: () => import("./safe.json") as unknown as Promise<IOxford>,
	safety: () => import("./safety.json") as unknown as Promise<IOxford>,
	sail: () => import("./sail.json") as unknown as Promise<IOxford>,
	sailing: () => import("./sailing.json") as unknown as Promise<IOxford>,
	sailor: () => import("./sailor.json") as unknown as Promise<IOxford>,
	saint: () => import("./saint.json") as unknown as Promise<IOxford>,
	sake: () => import("./sake.json") as unknown as Promise<IOxford>,
	salad: () => import("./salad.json") as unknown as Promise<IOxford>,
	salary: () => import("./salary.json") as unknown as Promise<IOxford>,
	sale: () => import("./sale.json") as unknown as Promise<IOxford>,
	salt: () => import("./salt.json") as unknown as Promise<IOxford>,
	same: () => import("./same.json") as unknown as Promise<IOxford>,
	sample: () => import("./sample.json") as unknown as Promise<IOxford>,
	sanction: () => import("./sanction.json") as unknown as Promise<IOxford>,
	sand: () => import("./sand.json") as unknown as Promise<IOxford>,
	sandwich: () => import("./sandwich.json") as unknown as Promise<IOxford>,
	satellite: () => import("./satellite.json") as unknown as Promise<IOxford>,
	satisfaction: () =>
		import("./satisfaction.json") as unknown as Promise<IOxford>,
	satisfied: () => import("./satisfied.json") as unknown as Promise<IOxford>,
	satisfy: () => import("./satisfy.json") as unknown as Promise<IOxford>,
	saturday: () => import("./saturday.json") as unknown as Promise<IOxford>,
	sauce: () => import("./sauce.json") as unknown as Promise<IOxford>,
	sausage: () => import("./sausage.json") as unknown as Promise<IOxford>,
	save: () => import("./save.json") as unknown as Promise<IOxford>,
	saving: () => import("./saving.json") as unknown as Promise<IOxford>,
	say: () => import("./say.json") as unknown as Promise<IOxford>,
};
