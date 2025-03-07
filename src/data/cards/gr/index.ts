import type { IOxford } from "../../../types/index.js";

export const dir_gr: Record<string, () => Promise<IOxford>> = {
	grab: () => import("./grab.json") as unknown as Promise<IOxford>,
	grace: () => import("./grace.json") as unknown as Promise<IOxford>,
	grade: () => import("./grade.json") as unknown as Promise<IOxford>,
	gradually: () => import("./gradually.json") as unknown as Promise<IOxford>,
	graduate: () => import("./graduate.json") as unknown as Promise<IOxford>,
	grain: () => import("./grain.json") as unknown as Promise<IOxford>,
	gram: () => import("./gram.json") as unknown as Promise<IOxford>,
	grammar: () => import("./grammar.json") as unknown as Promise<IOxford>,
	grand: () => import("./grand.json") as unknown as Promise<IOxford>,
	grandad: () => import("./grandad.json") as unknown as Promise<IOxford>,
	grandfather: () =>
		import("./grandfather.json") as unknown as Promise<IOxford>,
	grandma: () => import("./grandma.json") as unknown as Promise<IOxford>,
	grandmother: () =>
		import("./grandmother.json") as unknown as Promise<IOxford>,
	grandpa: () => import("./grandpa.json") as unknown as Promise<IOxford>,
	grandparent: () =>
		import("./grandparent.json") as unknown as Promise<IOxford>,
	granny: () => import("./granny.json") as unknown as Promise<IOxford>,
	grant: () => import("./grant.json") as unknown as Promise<IOxford>,
	graph: () => import("./graph.json") as unknown as Promise<IOxford>,
	graphic: () => import("./graphic.json") as unknown as Promise<IOxford>,
	graphics: () => import("./graphics.json") as unknown as Promise<IOxford>,
	grasp: () => import("./grasp.json") as unknown as Promise<IOxford>,
	grass: () => import("./grass.json") as unknown as Promise<IOxford>,
	grateful: () => import("./grateful.json") as unknown as Promise<IOxford>,
	grave: () => import("./grave.json") as unknown as Promise<IOxford>,
	gravity: () => import("./gravity.json") as unknown as Promise<IOxford>,
	gray: () => import("./gray.json") as unknown as Promise<IOxford>,
	great: () => import("./great.json") as unknown as Promise<IOxford>,
	greatly: () => import("./greatly.json") as unknown as Promise<IOxford>,
	green: () => import("./green.json") as unknown as Promise<IOxford>,
	greenhouse: () => import("./greenhouse.json") as unknown as Promise<IOxford>,
	greet: () => import("./greet.json") as unknown as Promise<IOxford>,
	grey: () => import("./grey.json") as unknown as Promise<IOxford>,
	grid: () => import("./grid.json") as unknown as Promise<IOxford>,
	grief: () => import("./grief.json") as unknown as Promise<IOxford>,
	grin: () => import("./grin.json") as unknown as Promise<IOxford>,
	grind: () => import("./grind.json") as unknown as Promise<IOxford>,
	grip: () => import("./grip.json") as unknown as Promise<IOxford>,
	grocery: () => import("./grocery.json") as unknown as Promise<IOxford>,
	gross: () => import("./gross.json") as unknown as Promise<IOxford>,
	ground: () => import("./ground.json") as unknown as Promise<IOxford>,
	group: () => import("./group.json") as unknown as Promise<IOxford>,
	grow: () => import("./grow.json") as unknown as Promise<IOxford>,
	growth: () => import("./growth.json") as unknown as Promise<IOxford>,
};
