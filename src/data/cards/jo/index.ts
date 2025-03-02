import type { IOxford } from "../../../types/index.js";

export const dir_jo: Record<string, () => Promise<IOxford>> = {
	job: () => import("./job.json") as unknown as Promise<IOxford>,
	join: () => import("./join.json") as unknown as Promise<IOxford>,
	joint: () => import("./joint.json") as unknown as Promise<IOxford>,
	joke: () => import("./joke.json") as unknown as Promise<IOxford>,
	jolly: () => import("./jolly.json") as unknown as Promise<IOxford>,
	journal: () => import("./journal.json") as unknown as Promise<IOxford>,
	journalism: () => import("./journalism.json") as unknown as Promise<IOxford>,
	journalist: () => import("./journalist.json") as unknown as Promise<IOxford>,
	journey: () => import("./journey.json") as unknown as Promise<IOxford>,
	joy: () => import("./joy.json") as unknown as Promise<IOxford>,
};
