import type { IOxford } from "../../../types/index.js";

export const dir_up: Record<string, () => Promise<IOxford>> = {
	up: () => import("./up.json") as unknown as Promise<IOxford>,
	upcoming: () => import("./upcoming.json") as unknown as Promise<IOxford>,
	update: () => import("./update.json") as unknown as Promise<IOxford>,
	upgrade: () => import("./upgrade.json") as unknown as Promise<IOxford>,
	uphold: () => import("./uphold.json") as unknown as Promise<IOxford>,
	upholstery: () => import("./upholstery.json") as unknown as Promise<IOxford>,
	upon: () => import("./upon.json") as unknown as Promise<IOxford>,
	upper: () => import("./upper.json") as unknown as Promise<IOxford>,
	upset: () => import("./upset.json") as unknown as Promise<IOxford>,
	upstairs: () => import("./upstairs.json") as unknown as Promise<IOxford>,
	upward: () => import("./upward.json") as unknown as Promise<IOxford>,
	upwards: () => import("./upwards.json") as unknown as Promise<IOxford>,
};
