import type { IOxford } from "../../../types/index.js";

export const dir_as: Record<string, () => Promise<IOxford>> = {
	as: () => import("./as.json") as unknown as Promise<IOxford>,
	ash: () => import("./ash.json") as unknown as Promise<IOxford>,
	ashamed: () => import("./ashamed.json") as unknown as Promise<IOxford>,
	aside: () => import("./aside.json") as unknown as Promise<IOxford>,
	ask: () => import("./ask.json") as unknown as Promise<IOxford>,
	asleep: () => import("./asleep.json") as unknown as Promise<IOxford>,
	aspect: () => import("./aspect.json") as unknown as Promise<IOxford>,
	aspiration: () => import("./aspiration.json") as unknown as Promise<IOxford>,
	aspire: () => import("./aspire.json") as unknown as Promise<IOxford>,
	assassination: () =>
		import("./assassination.json") as unknown as Promise<IOxford>,
	assault: () => import("./assault.json") as unknown as Promise<IOxford>,
	assemble: () => import("./assemble.json") as unknown as Promise<IOxford>,
	assembly: () => import("./assembly.json") as unknown as Promise<IOxford>,
	assert: () => import("./assert.json") as unknown as Promise<IOxford>,
	assertion: () => import("./assertion.json") as unknown as Promise<IOxford>,
	assess: () => import("./assess.json") as unknown as Promise<IOxford>,
	assessment: () => import("./assessment.json") as unknown as Promise<IOxford>,
	asset: () => import("./asset.json") as unknown as Promise<IOxford>,
	assign: () => import("./assign.json") as unknown as Promise<IOxford>,
	assignment: () => import("./assignment.json") as unknown as Promise<IOxford>,
	assist: () => import("./assist.json") as unknown as Promise<IOxford>,
	assistance: () => import("./assistance.json") as unknown as Promise<IOxford>,
	assistant: () => import("./assistant.json") as unknown as Promise<IOxford>,
	associate: () => import("./associate.json") as unknown as Promise<IOxford>,
	associated: () => import("./associated.json") as unknown as Promise<IOxford>,
	association: () =>
		import("./association.json") as unknown as Promise<IOxford>,
	assume: () => import("./assume.json") as unknown as Promise<IOxford>,
	assumption: () => import("./assumption.json") as unknown as Promise<IOxford>,
	assurance: () => import("./assurance.json") as unknown as Promise<IOxford>,
	assure: () => import("./assure.json") as unknown as Promise<IOxford>,
	astonishing: () =>
		import("./astonishing.json") as unknown as Promise<IOxford>,
	asylum: () => import("./asylum.json") as unknown as Promise<IOxford>,
};
