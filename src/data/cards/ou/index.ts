import type { IOxford } from "../../../types/index.js";

export const dir_ou: Record<string, () => Promise<IOxford>> = {
	"ought-to": () => import("./ought-to.json") as unknown as Promise<IOxford>,
	ounce: () => import("./ounce.json") as unknown as Promise<IOxford>,
	our: () => import("./our.json") as unknown as Promise<IOxford>,
	ours: () => import("./ours.json") as unknown as Promise<IOxford>,
	ourselves: () => import("./ourselves.json") as unknown as Promise<IOxford>,
	out: () => import("./out.json") as unknown as Promise<IOxford>,
	outbreak: () => import("./outbreak.json") as unknown as Promise<IOxford>,
	outcome: () => import("./outcome.json") as unknown as Promise<IOxford>,
	outdoor: () => import("./outdoor.json") as unknown as Promise<IOxford>,
	outdoors: () => import("./outdoors.json") as unknown as Promise<IOxford>,
	outer: () => import("./outer.json") as unknown as Promise<IOxford>,
	outfit: () => import("./outfit.json") as unknown as Promise<IOxford>,
	outing: () => import("./outing.json") as unknown as Promise<IOxford>,
	outlaw: () => import("./outlaw.json") as unknown as Promise<IOxford>,
	outlet: () => import("./outlet.json") as unknown as Promise<IOxford>,
	outline: () => import("./outline.json") as unknown as Promise<IOxford>,
	outlook: () => import("./outlook.json") as unknown as Promise<IOxford>,
	output: () => import("./output.json") as unknown as Promise<IOxford>,
	outrage: () => import("./outrage.json") as unknown as Promise<IOxford>,
	outside: () => import("./outside.json") as unknown as Promise<IOxford>,
	outsider: () => import("./outsider.json") as unknown as Promise<IOxford>,
	outstanding: () =>
		import("./outstanding.json") as unknown as Promise<IOxford>,
};
