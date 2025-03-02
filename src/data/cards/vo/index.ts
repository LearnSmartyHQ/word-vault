import type { IOxford } from "../../../types/index.js";

export const dir_vo: Record<string, () => Promise<IOxford>> = {
	vocal: () => import("./vocal.json") as unknown as Promise<IOxford>,
	vocation: () => import("./vocation.json") as unknown as Promise<IOxford>,
	voice: () => import("./voice.json") as unknown as Promise<IOxford>,
	volume: () => import("./volume.json") as unknown as Promise<IOxford>,
	voluntary: () => import("./voluntary.json") as unknown as Promise<IOxford>,
	volunteer: () => import("./volunteer.json") as unknown as Promise<IOxford>,
	vote: () => import("./vote.json") as unknown as Promise<IOxford>,
	voting: () => import("./voting.json") as unknown as Promise<IOxford>,
	vow: () => import("./vow.json") as unknown as Promise<IOxford>,
};
