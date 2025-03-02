import type { IOxford } from "../../../types/index.js";

export const dir_gi: Record<string, () => Promise<IOxford>> = {
	giant: () => import("./giant.json") as unknown as Promise<IOxford>,
	gift: () => import("./gift.json") as unknown as Promise<IOxford>,
	gig: () => import("./gig.json") as unknown as Promise<IOxford>,
	girl: () => import("./girl.json") as unknown as Promise<IOxford>,
	girlfriend: () => import("./girlfriend.json") as unknown as Promise<IOxford>,
	give: () => import("./give.json") as unknown as Promise<IOxford>,
};
