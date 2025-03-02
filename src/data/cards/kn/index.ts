import type { IOxford } from "../../../types/index.js";

export const dir_kn: Record<string, () => Promise<IOxford>> = {
	knee: () => import("./knee.json") as unknown as Promise<IOxford>,
	kneel: () => import("./kneel.json") as unknown as Promise<IOxford>,
	knife: () => import("./knife.json") as unknown as Promise<IOxford>,
	knock: () => import("./knock.json") as unknown as Promise<IOxford>,
	know: () => import("./know.json") as unknown as Promise<IOxford>,
	knowledge: () => import("./knowledge.json") as unknown as Promise<IOxford>,
	known: () => import("./known.json") as unknown as Promise<IOxford>,
};
