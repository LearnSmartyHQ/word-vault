import type { IOxford } from "../../../types/index.js";

export const dir_op: Record<string, () => Promise<IOxford>> = {
	open: () => import("./open.json") as unknown as Promise<IOxford>,
	opening: () => import("./opening.json") as unknown as Promise<IOxford>,
	openly: () => import("./openly.json") as unknown as Promise<IOxford>,
	opera: () => import("./opera.json") as unknown as Promise<IOxford>,
	operate: () => import("./operate.json") as unknown as Promise<IOxford>,
	operation: () => import("./operation.json") as unknown as Promise<IOxford>,
	operational: () =>
		import("./operational.json") as unknown as Promise<IOxford>,
	operator: () => import("./operator.json") as unknown as Promise<IOxford>,
	opinion: () => import("./opinion.json") as unknown as Promise<IOxford>,
	opponent: () => import("./opponent.json") as unknown as Promise<IOxford>,
	opportunity: () =>
		import("./opportunity.json") as unknown as Promise<IOxford>,
	oppose: () => import("./oppose.json") as unknown as Promise<IOxford>,
	opposed: () => import("./opposed.json") as unknown as Promise<IOxford>,
	opposite: () => import("./opposite.json") as unknown as Promise<IOxford>,
	opposition: () => import("./opposition.json") as unknown as Promise<IOxford>,
	opt: () => import("./opt.json") as unknown as Promise<IOxford>,
	optical: () => import("./optical.json") as unknown as Promise<IOxford>,
	optimism: () => import("./optimism.json") as unknown as Promise<IOxford>,
	optimistic: () => import("./optimistic.json") as unknown as Promise<IOxford>,
	optimize: () => import("./optimize.json") as unknown as Promise<IOxford>,
	option: () => import("./option.json") as unknown as Promise<IOxford>,
};
