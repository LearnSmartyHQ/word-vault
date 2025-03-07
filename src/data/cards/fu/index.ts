import type { IOxford } from "../../../types/index.js";

export const dir_fu: Record<string, () => Promise<IOxford>> = {
	fuel: () => import("./fuel.json") as unknown as Promise<IOxford>,
	fugitive: () => import("./fugitive.json") as unknown as Promise<IOxford>,
	fulfil: () => import("./fulfil.json") as unknown as Promise<IOxford>,
	fulfill: () => import("./fulfill.json") as unknown as Promise<IOxford>,
	"full-time": () => import("./full-time.json") as unknown as Promise<IOxford>,
	full: () => import("./full.json") as unknown as Promise<IOxford>,
	fully: () => import("./fully.json") as unknown as Promise<IOxford>,
	fun: () => import("./fun.json") as unknown as Promise<IOxford>,
	function: () => import("./function.json") as unknown as Promise<IOxford>,
	functional: () => import("./functional.json") as unknown as Promise<IOxford>,
	fund: () => import("./fund.json") as unknown as Promise<IOxford>,
	fundamental: () =>
		import("./fundamental.json") as unknown as Promise<IOxford>,
	fundamentally: () =>
		import("./fundamentally.json") as unknown as Promise<IOxford>,
	funding: () => import("./funding.json") as unknown as Promise<IOxford>,
	fundraising: () =>
		import("./fundraising.json") as unknown as Promise<IOxford>,
	funeral: () => import("./funeral.json") as unknown as Promise<IOxford>,
	funny: () => import("./funny.json") as unknown as Promise<IOxford>,
	fur: () => import("./fur.json") as unknown as Promise<IOxford>,
	furious: () => import("./furious.json") as unknown as Promise<IOxford>,
	furniture: () => import("./furniture.json") as unknown as Promise<IOxford>,
	further: () => import("./further.json") as unknown as Promise<IOxford>,
	furthermore: () =>
		import("./furthermore.json") as unknown as Promise<IOxford>,
	fuss: () => import("./fuss.json") as unknown as Promise<IOxford>,
	future: () => import("./future.json") as unknown as Promise<IOxford>,
};
