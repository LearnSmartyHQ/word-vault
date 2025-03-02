import type { IOxford } from "../../../types/index.js";

export const dir_ho: Record<string, () => Promise<IOxford>> = {
	hobby: () => import("./hobby.json") as unknown as Promise<IOxford>,
	hockey: () => import("./hockey.json") as unknown as Promise<IOxford>,
	hold: () => import("./hold.json") as unknown as Promise<IOxford>,
	holder: () => import("./holder.json") as unknown as Promise<IOxford>,
	holding: () => import("./holding.json") as unknown as Promise<IOxford>,
	hole: () => import("./hole.json") as unknown as Promise<IOxford>,
	holiday: () => import("./holiday.json") as unknown as Promise<IOxford>,
	hollow: () => import("./hollow.json") as unknown as Promise<IOxford>,
	holy: () => import("./holy.json") as unknown as Promise<IOxford>,
	home: () => import("./home.json") as unknown as Promise<IOxford>,
	homeland: () => import("./homeland.json") as unknown as Promise<IOxford>,
	homeless: () => import("./homeless.json") as unknown as Promise<IOxford>,
	homework: () => import("./homework.json") as unknown as Promise<IOxford>,
	homicide: () => import("./homicide.json") as unknown as Promise<IOxford>,
	honest: () => import("./honest.json") as unknown as Promise<IOxford>,
	honestly: () => import("./honestly.json") as unknown as Promise<IOxford>,
	honesty: () => import("./honesty.json") as unknown as Promise<IOxford>,
	honey: () => import("./honey.json") as unknown as Promise<IOxford>,
	honor: () => import("./honor.json") as unknown as Promise<IOxford>,
	honour: () => import("./honour.json") as unknown as Promise<IOxford>,
	hook: () => import("./hook.json") as unknown as Promise<IOxford>,
	hope: () => import("./hope.json") as unknown as Promise<IOxford>,
	hopeful: () => import("./hopeful.json") as unknown as Promise<IOxford>,
	hopefully: () => import("./hopefully.json") as unknown as Promise<IOxford>,
	hopeless: () => import("./hopeless.json") as unknown as Promise<IOxford>,
	horizon: () => import("./horizon.json") as unknown as Promise<IOxford>,
	horn: () => import("./horn.json") as unknown as Promise<IOxford>,
	horrible: () => import("./horrible.json") as unknown as Promise<IOxford>,
	horrid: () => import("./horrid.json") as unknown as Promise<IOxford>,
	horror: () => import("./horror.json") as unknown as Promise<IOxford>,
	horse: () => import("./horse.json") as unknown as Promise<IOxford>,
	hospital: () => import("./hospital.json") as unknown as Promise<IOxford>,
	host: () => import("./host.json") as unknown as Promise<IOxford>,
	hostage: () => import("./hostage.json") as unknown as Promise<IOxford>,
	hostile: () => import("./hostile.json") as unknown as Promise<IOxford>,
	hostility: () => import("./hostility.json") as unknown as Promise<IOxford>,
	hot: () => import("./hot.json") as unknown as Promise<IOxford>,
	hotel: () => import("./hotel.json") as unknown as Promise<IOxford>,
	hour: () => import("./hour.json") as unknown as Promise<IOxford>,
	house: () => import("./house.json") as unknown as Promise<IOxford>,
	household: () => import("./household.json") as unknown as Promise<IOxford>,
	housing: () => import("./housing.json") as unknown as Promise<IOxford>,
	how: () => import("./how.json") as unknown as Promise<IOxford>,
	however: () => import("./however.json") as unknown as Promise<IOxford>,
};
