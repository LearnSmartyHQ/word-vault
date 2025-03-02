import type { IOxford } from "../../../types/index.js";

export const dir_ju: Record<string, () => Promise<IOxford>> = {
	judge: () => import("./judge.json") as unknown as Promise<IOxford>,
	judgement: () => import("./judgement.json") as unknown as Promise<IOxford>,
	judgment: () => import("./judgment.json") as unknown as Promise<IOxford>,
	judicial: () => import("./judicial.json") as unknown as Promise<IOxford>,
	juice: () => import("./juice.json") as unknown as Promise<IOxford>,
	july: () => import("./july.json") as unknown as Promise<IOxford>,
	jump: () => import("./jump.json") as unknown as Promise<IOxford>,
	jumper: () => import("./jumper.json") as unknown as Promise<IOxford>,
	junction: () => import("./junction.json") as unknown as Promise<IOxford>,
	june: () => import("./june.json") as unknown as Promise<IOxford>,
	junior: () => import("./junior.json") as unknown as Promise<IOxford>,
	jurisdiction: () =>
		import("./jurisdiction.json") as unknown as Promise<IOxford>,
	jury: () => import("./jury.json") as unknown as Promise<IOxford>,
	just: () => import("./just.json") as unknown as Promise<IOxford>,
	justice: () => import("./justice.json") as unknown as Promise<IOxford>,
	justification: () =>
		import("./justification.json") as unknown as Promise<IOxford>,
	justify: () => import("./justify.json") as unknown as Promise<IOxford>,
	juvenile: () => import("./juvenile.json") as unknown as Promise<IOxford>,
};
