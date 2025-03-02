import type { IOxford } from "../../../types/index.js";

export const dir_ob: Record<string, () => Promise<IOxford>> = {
	obedient: () => import("./obedient.json") as unknown as Promise<IOxford>,
	obesity: () => import("./obesity.json") as unknown as Promise<IOxford>,
	obey: () => import("./obey.json") as unknown as Promise<IOxford>,
	object: () => import("./object.json") as unknown as Promise<IOxford>,
	objection: () => import("./objection.json") as unknown as Promise<IOxford>,
	objective: () => import("./objective.json") as unknown as Promise<IOxford>,
	obligation: () => import("./obligation.json") as unknown as Promise<IOxford>,
	oblige: () => import("./oblige.json") as unknown as Promise<IOxford>,
	observant: () => import("./observant.json") as unknown as Promise<IOxford>,
	observation: () =>
		import("./observation.json") as unknown as Promise<IOxford>,
	observe: () => import("./observe.json") as unknown as Promise<IOxford>,
	observer: () => import("./observer.json") as unknown as Promise<IOxford>,
	obsess: () => import("./obsess.json") as unknown as Promise<IOxford>,
	obsession: () => import("./obsession.json") as unknown as Promise<IOxford>,
	obstacle: () => import("./obstacle.json") as unknown as Promise<IOxford>,
	obtain: () => import("./obtain.json") as unknown as Promise<IOxford>,
	obvious: () => import("./obvious.json") as unknown as Promise<IOxford>,
	obviously: () => import("./obviously.json") as unknown as Promise<IOxford>,
};
