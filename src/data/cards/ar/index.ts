import type { IOxford } from "../../../types/index.js";

export const dir_ar: Record<string, () => Promise<IOxford>> = {
	arbitrary: () => import("./arbitrary.json") as unknown as Promise<IOxford>,
	architect: () => import("./architect.json") as unknown as Promise<IOxford>,
	architectural: () =>
		import("./architectural.json") as unknown as Promise<IOxford>,
	architecture: () =>
		import("./architecture.json") as unknown as Promise<IOxford>,
	archive: () => import("./archive.json") as unknown as Promise<IOxford>,
	area: () => import("./area.json") as unknown as Promise<IOxford>,
	arena: () => import("./arena.json") as unknown as Promise<IOxford>,
	arguably: () => import("./arguably.json") as unknown as Promise<IOxford>,
	argue: () => import("./argue.json") as unknown as Promise<IOxford>,
	argument: () => import("./argument.json") as unknown as Promise<IOxford>,
	arise: () => import("./arise.json") as unknown as Promise<IOxford>,
	arm: () => import("./arm.json") as unknown as Promise<IOxford>,
	armed: () => import("./armed.json") as unknown as Promise<IOxford>,
	arms: () => import("./arms.json") as unknown as Promise<IOxford>,
	army: () => import("./army.json") as unknown as Promise<IOxford>,
	around: () => import("./around.json") as unknown as Promise<IOxford>,
	arrange: () => import("./arrange.json") as unknown as Promise<IOxford>,
	arrangement: () =>
		import("./arrangement.json") as unknown as Promise<IOxford>,
	array: () => import("./array.json") as unknown as Promise<IOxford>,
	arrest: () => import("./arrest.json") as unknown as Promise<IOxford>,
	arrival: () => import("./arrival.json") as unknown as Promise<IOxford>,
	arrive: () => import("./arrive.json") as unknown as Promise<IOxford>,
	arrow: () => import("./arrow.json") as unknown as Promise<IOxford>,
	art: () => import("./art.json") as unknown as Promise<IOxford>,
	article: () => import("./article.json") as unknown as Promise<IOxford>,
	articulate: () => import("./articulate.json") as unknown as Promise<IOxford>,
	artificial: () => import("./artificial.json") as unknown as Promise<IOxford>,
	artist: () => import("./artist.json") as unknown as Promise<IOxford>,
	artistic: () => import("./artistic.json") as unknown as Promise<IOxford>,
	artwork: () => import("./artwork.json") as unknown as Promise<IOxford>,
};
