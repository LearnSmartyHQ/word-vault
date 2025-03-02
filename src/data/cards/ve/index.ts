import type { IOxford } from "../../../types/index.js";

export const dir_ve: Record<string, () => Promise<IOxford>> = {
	vegetable: () => import("./vegetable.json") as unknown as Promise<IOxford>,
	vehicle: () => import("./vehicle.json") as unknown as Promise<IOxford>,
	vein: () => import("./vein.json") as unknown as Promise<IOxford>,
	ventilate: () => import("./ventilate.json") as unknown as Promise<IOxford>,
	venture: () => import("./venture.json") as unknown as Promise<IOxford>,
	venue: () => import("./venue.json") as unknown as Promise<IOxford>,
	verb: () => import("./verb.json") as unknown as Promise<IOxford>,
	verbal: () => import("./verbal.json") as unknown as Promise<IOxford>,
	verdict: () => import("./verdict.json") as unknown as Promise<IOxford>,
	verify: () => import("./verify.json") as unknown as Promise<IOxford>,
	vermin: () => import("./vermin.json") as unknown as Promise<IOxford>,
	verse: () => import("./verse.json") as unknown as Promise<IOxford>,
	version: () => import("./version.json") as unknown as Promise<IOxford>,
	versus: () => import("./versus.json") as unknown as Promise<IOxford>,
	vertical: () => import("./vertical.json") as unknown as Promise<IOxford>,
	very: () => import("./very.json") as unknown as Promise<IOxford>,
	vessel: () => import("./vessel.json") as unknown as Promise<IOxford>,
	vet: () => import("./vet.json") as unknown as Promise<IOxford>,
	veteran: () => import("./veteran.json") as unknown as Promise<IOxford>,
};
