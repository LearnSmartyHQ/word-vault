import type { IOxford } from "../../../types/index.js";

export const dir_au: Record<string, () => Promise<IOxford>> = {
	auction: () => import("./auction.json") as unknown as Promise<IOxford>,
	audible: () => import("./audible.json") as unknown as Promise<IOxford>,
	audience: () => import("./audience.json") as unknown as Promise<IOxford>,
	audio: () => import("./audio.json") as unknown as Promise<IOxford>,
	audit: () => import("./audit.json") as unknown as Promise<IOxford>,
	august: () => import("./august.json") as unknown as Promise<IOxford>,
	aunt: () => import("./aunt.json") as unknown as Promise<IOxford>,
	authentic: () => import("./authentic.json") as unknown as Promise<IOxford>,
	author: () => import("./author.json") as unknown as Promise<IOxford>,
	authority: () => import("./authority.json") as unknown as Promise<IOxford>,
	authorize: () => import("./authorize.json") as unknown as Promise<IOxford>,
	auto: () => import("./auto.json") as unknown as Promise<IOxford>,
	automatic: () => import("./automatic.json") as unknown as Promise<IOxford>,
	automatically: () =>
		import("./automatically.json") as unknown as Promise<IOxford>,
	autonomy: () => import("./autonomy.json") as unknown as Promise<IOxford>,
	autumn: () => import("./autumn.json") as unknown as Promise<IOxford>,
};
