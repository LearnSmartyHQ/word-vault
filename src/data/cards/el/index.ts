import type { IOxford } from "../../../types/index.js";

export const dir_el: Record<string, () => Promise<IOxford>> = {
	elaborate: () => import("./elaborate.json") as unknown as Promise<IOxford>,
	elbow: () => import("./elbow.json") as unknown as Promise<IOxford>,
	elderly: () => import("./elderly.json") as unknown as Promise<IOxford>,
	elect: () => import("./elect.json") as unknown as Promise<IOxford>,
	election: () => import("./election.json") as unknown as Promise<IOxford>,
	electoral: () => import("./electoral.json") as unknown as Promise<IOxford>,
	electric: () => import("./electric.json") as unknown as Promise<IOxford>,
	electrical: () => import("./electrical.json") as unknown as Promise<IOxford>,
	electricity: () =>
		import("./electricity.json") as unknown as Promise<IOxford>,
	electronic: () => import("./electronic.json") as unknown as Promise<IOxford>,
	electronics: () =>
		import("./electronics.json") as unknown as Promise<IOxford>,
	elegant: () => import("./elegant.json") as unknown as Promise<IOxford>,
	element: () => import("./element.json") as unknown as Promise<IOxford>,
	elementary: () => import("./elementary.json") as unknown as Promise<IOxford>,
	elephant: () => import("./elephant.json") as unknown as Promise<IOxford>,
	elevate: () => import("./elevate.json") as unknown as Promise<IOxford>,
	elevator: () => import("./elevator.json") as unknown as Promise<IOxford>,
	eleven: () => import("./eleven.json") as unknown as Promise<IOxford>,
	eligible: () => import("./eligible.json") as unknown as Promise<IOxford>,
	eliminate: () => import("./eliminate.json") as unknown as Promise<IOxford>,
	elite: () => import("./elite.json") as unknown as Promise<IOxford>,
	else: () => import("./else.json") as unknown as Promise<IOxford>,
	elsewhere: () => import("./elsewhere.json") as unknown as Promise<IOxford>,
};
