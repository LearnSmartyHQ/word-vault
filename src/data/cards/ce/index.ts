import type { IOxford } from "../../../types/index.js";

export const dir_ce: Record<string, () => Promise<IOxford>> = {
	cease: () => import("./cease.json") as unknown as Promise<IOxford>,
	ceiling: () => import("./ceiling.json") as unknown as Promise<IOxford>,
	celebrate: () => import("./celebrate.json") as unknown as Promise<IOxford>,
	celebration: () =>
		import("./celebration.json") as unknown as Promise<IOxford>,
	celebrity: () => import("./celebrity.json") as unknown as Promise<IOxford>,
	"cell-phone": () =>
		import("./cell-phone.json") as unknown as Promise<IOxford>,
	cell: () => import("./cell.json") as unknown as Promise<IOxford>,
	cemetery: () => import("./cemetery.json") as unknown as Promise<IOxford>,
	censor: () => import("./censor.json") as unknown as Promise<IOxford>,
	cent: () => import("./cent.json") as unknown as Promise<IOxford>,
	center: () => import("./center.json") as unknown as Promise<IOxford>,
	centimetre: () => import("./centimetre.json") as unknown as Promise<IOxford>,
	central: () => import("./central.json") as unknown as Promise<IOxford>,
	centre: () => import("./centre.json") as unknown as Promise<IOxford>,
	century: () => import("./century.json") as unknown as Promise<IOxford>,
	cereal: () => import("./cereal.json") as unknown as Promise<IOxford>,
	ceremony: () => import("./ceremony.json") as unknown as Promise<IOxford>,
	certain: () => import("./certain.json") as unknown as Promise<IOxford>,
	certainly: () => import("./certainly.json") as unknown as Promise<IOxford>,
	certainty: () => import("./certainty.json") as unknown as Promise<IOxford>,
	certificate: () =>
		import("./certificate.json") as unknown as Promise<IOxford>,
};
