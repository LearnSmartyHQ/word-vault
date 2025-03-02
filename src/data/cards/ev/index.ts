import type { IOxford } from "../../../types/index.js";

export const dir_ev: Record<string, () => Promise<IOxford>> = {
	evacuate: () => import("./evacuate.json") as unknown as Promise<IOxford>,
	evade: () => import("./evade.json") as unknown as Promise<IOxford>,
	evaluate: () => import("./evaluate.json") as unknown as Promise<IOxford>,
	evaluation: () => import("./evaluation.json") as unknown as Promise<IOxford>,
	even: () => import("./even.json") as unknown as Promise<IOxford>,
	evening: () => import("./evening.json") as unknown as Promise<IOxford>,
	event: () => import("./event.json") as unknown as Promise<IOxford>,
	eventually: () => import("./eventually.json") as unknown as Promise<IOxford>,
	ever: () => import("./ever.json") as unknown as Promise<IOxford>,
	every: () => import("./every.json") as unknown as Promise<IOxford>,
	everybody: () => import("./everybody.json") as unknown as Promise<IOxford>,
	everyday: () => import("./everyday.json") as unknown as Promise<IOxford>,
	everyone: () => import("./everyone.json") as unknown as Promise<IOxford>,
	everything: () => import("./everything.json") as unknown as Promise<IOxford>,
	everywhere: () => import("./everywhere.json") as unknown as Promise<IOxford>,
	evidence: () => import("./evidence.json") as unknown as Promise<IOxford>,
	evident: () => import("./evident.json") as unknown as Promise<IOxford>,
	evil: () => import("./evil.json") as unknown as Promise<IOxford>,
	evoke: () => import("./evoke.json") as unknown as Promise<IOxford>,
	evolution: () => import("./evolution.json") as unknown as Promise<IOxford>,
	evolutionary: () =>
		import("./evolutionary.json") as unknown as Promise<IOxford>,
	evolve: () => import("./evolve.json") as unknown as Promise<IOxford>,
};
