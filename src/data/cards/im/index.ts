import type { IOxford } from "../../../types/index.js";

export const dir_im: Record<string, () => Promise<IOxford>> = {
	image: () => import("./image.json") as unknown as Promise<IOxford>,
	imagery: () => import("./imagery.json") as unknown as Promise<IOxford>,
	imaginary: () => import("./imaginary.json") as unknown as Promise<IOxford>,
	imagination: () =>
		import("./imagination.json") as unknown as Promise<IOxford>,
	imagine: () => import("./imagine.json") as unknown as Promise<IOxford>,
	immediate: () => import("./immediate.json") as unknown as Promise<IOxford>,
	immediately: () =>
		import("./immediately.json") as unknown as Promise<IOxford>,
	immense: () => import("./immense.json") as unknown as Promise<IOxford>,
	immigrant: () => import("./immigrant.json") as unknown as Promise<IOxford>,
	immigration: () =>
		import("./immigration.json") as unknown as Promise<IOxford>,
	imminent: () => import("./imminent.json") as unknown as Promise<IOxford>,
	immune: () => import("./immune.json") as unknown as Promise<IOxford>,
	impact: () => import("./impact.json") as unknown as Promise<IOxford>,
	impatient: () => import("./impatient.json") as unknown as Promise<IOxford>,
	implement: () => import("./implement.json") as unknown as Promise<IOxford>,
	implementation: () =>
		import("./implementation.json") as unknown as Promise<IOxford>,
	implication: () =>
		import("./implication.json") as unknown as Promise<IOxford>,
	imply: () => import("./imply.json") as unknown as Promise<IOxford>,
	import: () => import("./import.json") as unknown as Promise<IOxford>,
	importance: () => import("./importance.json") as unknown as Promise<IOxford>,
	important: () => import("./important.json") as unknown as Promise<IOxford>,
	impose: () => import("./impose.json") as unknown as Promise<IOxford>,
	impossible: () => import("./impossible.json") as unknown as Promise<IOxford>,
	impress: () => import("./impress.json") as unknown as Promise<IOxford>,
	impressed: () => import("./impressed.json") as unknown as Promise<IOxford>,
	impression: () => import("./impression.json") as unknown as Promise<IOxford>,
	impressive: () => import("./impressive.json") as unknown as Promise<IOxford>,
	imprison: () => import("./imprison.json") as unknown as Promise<IOxford>,
	imprisonment: () =>
		import("./imprisonment.json") as unknown as Promise<IOxford>,
	improve: () => import("./improve.json") as unknown as Promise<IOxford>,
	improvement: () =>
		import("./improvement.json") as unknown as Promise<IOxford>,
};
