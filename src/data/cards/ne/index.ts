import type { IOxford } from "../../../types/index.js";

export const dir_ne: Record<string, () => Promise<IOxford>> = {
	near: () => import("./near.json") as unknown as Promise<IOxford>,
	nearby: () => import("./nearby.json") as unknown as Promise<IOxford>,
	nearly: () => import("./nearly.json") as unknown as Promise<IOxford>,
	neat: () => import("./neat.json") as unknown as Promise<IOxford>,
	necessarily: () =>
		import("./necessarily.json") as unknown as Promise<IOxford>,
	necessary: () => import("./necessary.json") as unknown as Promise<IOxford>,
	necessity: () => import("./necessity.json") as unknown as Promise<IOxford>,
	neck: () => import("./neck.json") as unknown as Promise<IOxford>,
	need: () => import("./need.json") as unknown as Promise<IOxford>,
	needle: () => import("./needle.json") as unknown as Promise<IOxford>,
	negative: () => import("./negative.json") as unknown as Promise<IOxford>,
	neglect: () => import("./neglect.json") as unknown as Promise<IOxford>,
	negotiate: () => import("./negotiate.json") as unknown as Promise<IOxford>,
	negotiation: () =>
		import("./negotiation.json") as unknown as Promise<IOxford>,
	neighbor: () => import("./neighbor.json") as unknown as Promise<IOxford>,
	neighborhood: () =>
		import("./neighborhood.json") as unknown as Promise<IOxford>,
	neighboring: () =>
		import("./neighboring.json") as unknown as Promise<IOxford>,
	neighbour: () => import("./neighbour.json") as unknown as Promise<IOxford>,
	neighbourhood: () =>
		import("./neighbourhood.json") as unknown as Promise<IOxford>,
	neighbouring: () =>
		import("./neighbouring.json") as unknown as Promise<IOxford>,
	neither: () => import("./neither.json") as unknown as Promise<IOxford>,
	nerve: () => import("./nerve.json") as unknown as Promise<IOxford>,
	nervous: () => import("./nervous.json") as unknown as Promise<IOxford>,
	nest: () => import("./nest.json") as unknown as Promise<IOxford>,
	net: () => import("./net.json") as unknown as Promise<IOxford>,
	network: () => import("./network.json") as unknown as Promise<IOxford>,
	neutral: () => import("./neutral.json") as unknown as Promise<IOxford>,
	never: () => import("./never.json") as unknown as Promise<IOxford>,
	nevertheless: () =>
		import("./nevertheless.json") as unknown as Promise<IOxford>,
	new: () => import("./new.json") as unknown as Promise<IOxford>,
	newly: () => import("./newly.json") as unknown as Promise<IOxford>,
	news: () => import("./news.json") as unknown as Promise<IOxford>,
	newsletter: () => import("./newsletter.json") as unknown as Promise<IOxford>,
	newspaper: () => import("./newspaper.json") as unknown as Promise<IOxford>,
	next: () => import("./next.json") as unknown as Promise<IOxford>,
};
