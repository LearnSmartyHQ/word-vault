import type { IOxford } from "../../../types/index.js";

export const dir_pl: Record<string, () => Promise<IOxford>> = {
	placard: () => import("./placard.json") as unknown as Promise<IOxford>,
	place: () => import("./place.json") as unknown as Promise<IOxford>,
	placement: () => import("./placement.json") as unknown as Promise<IOxford>,
	plain: () => import("./plain.json") as unknown as Promise<IOxford>,
	plan: () => import("./plan.json") as unknown as Promise<IOxford>,
	plane: () => import("./plane.json") as unknown as Promise<IOxford>,
	planet: () => import("./planet.json") as unknown as Promise<IOxford>,
	planning: () => import("./planning.json") as unknown as Promise<IOxford>,
	plant: () => import("./plant.json") as unknown as Promise<IOxford>,
	plastic: () => import("./plastic.json") as unknown as Promise<IOxford>,
	plate: () => import("./plate.json") as unknown as Promise<IOxford>,
	platform: () => import("./platform.json") as unknown as Promise<IOxford>,
	play: () => import("./play.json") as unknown as Promise<IOxford>,
	player: () => import("./player.json") as unknown as Promise<IOxford>,
	plea: () => import("./plea.json") as unknown as Promise<IOxford>,
	plead: () => import("./plead.json") as unknown as Promise<IOxford>,
	pleasant: () => import("./pleasant.json") as unknown as Promise<IOxford>,
	please: () => import("./please.json") as unknown as Promise<IOxford>,
	pleased: () => import("./pleased.json") as unknown as Promise<IOxford>,
	pleasure: () => import("./pleasure.json") as unknown as Promise<IOxford>,
	pledge: () => import("./pledge.json") as unknown as Promise<IOxford>,
	plenty: () => import("./plenty.json") as unknown as Promise<IOxford>,
	plot: () => import("./plot.json") as unknown as Promise<IOxford>,
	plug: () => import("./plug.json") as unknown as Promise<IOxford>,
	plunge: () => import("./plunge.json") as unknown as Promise<IOxford>,
	plus: () => import("./plus.json") as unknown as Promise<IOxford>,
	plus1: () => import("./plus1.json") as unknown as Promise<IOxford>,
};
