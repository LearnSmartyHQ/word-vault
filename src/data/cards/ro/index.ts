import type { IOxford } from "../../../types/index.js";

export const dir_ro: Record<string, () => Promise<IOxford>> = {
	road: () => import("./road.json") as unknown as Promise<IOxford>,
	roam: () => import("./roam.json") as unknown as Promise<IOxford>,
	rob: () => import("./rob.json") as unknown as Promise<IOxford>,
	robbery: () => import("./robbery.json") as unknown as Promise<IOxford>,
	robot: () => import("./robot.json") as unknown as Promise<IOxford>,
	robust: () => import("./robust.json") as unknown as Promise<IOxford>,
	rock: () => import("./rock.json") as unknown as Promise<IOxford>,
	rocket: () => import("./rocket.json") as unknown as Promise<IOxford>,
	rod: () => import("./rod.json") as unknown as Promise<IOxford>,
	role: () => import("./role.json") as unknown as Promise<IOxford>,
	roll: () => import("./roll.json") as unknown as Promise<IOxford>,
	romance: () => import("./romance.json") as unknown as Promise<IOxford>,
	romantic: () => import("./romantic.json") as unknown as Promise<IOxford>,
	roof: () => import("./roof.json") as unknown as Promise<IOxford>,
	rookie: () => import("./rookie.json") as unknown as Promise<IOxford>,
	room: () => import("./room.json") as unknown as Promise<IOxford>,
	root: () => import("./root.json") as unknown as Promise<IOxford>,
	rope: () => import("./rope.json") as unknown as Promise<IOxford>,
	rose: () => import("./rose.json") as unknown as Promise<IOxford>,
	roster: () => import("./roster.json") as unknown as Promise<IOxford>,
	rotate: () => import("./rotate.json") as unknown as Promise<IOxford>,
	rotation: () => import("./rotation.json") as unknown as Promise<IOxford>,
	rough: () => import("./rough.json") as unknown as Promise<IOxford>,
	roughly: () => import("./roughly.json") as unknown as Promise<IOxford>,
	round: () => import("./round.json") as unknown as Promise<IOxford>,
	route: () => import("./route.json") as unknown as Promise<IOxford>,
	routine: () => import("./routine.json") as unknown as Promise<IOxford>,
	row: () => import("./row.json") as unknown as Promise<IOxford>,
	row1: () => import("./row1.json") as unknown as Promise<IOxford>,
	royal: () => import("./royal.json") as unknown as Promise<IOxford>,
};
