import type { IOxford } from "../../../types/index.js";

export const dir_at: Record<string, () => Promise<IOxford>> = {
	at: () => import("./at.json") as unknown as Promise<IOxford>,
	athlete: () => import("./athlete.json") as unknown as Promise<IOxford>,
	athletic: () => import("./athletic.json") as unknown as Promise<IOxford>,
	atmosphere: () => import("./atmosphere.json") as unknown as Promise<IOxford>,
	atrocity: () => import("./atrocity.json") as unknown as Promise<IOxford>,
	attach: () => import("./attach.json") as unknown as Promise<IOxford>,
	attachment: () => import("./attachment.json") as unknown as Promise<IOxford>,
	attack: () => import("./attack.json") as unknown as Promise<IOxford>,
	attain: () => import("./attain.json") as unknown as Promise<IOxford>,
	attempt: () => import("./attempt.json") as unknown as Promise<IOxford>,
	attend: () => import("./attend.json") as unknown as Promise<IOxford>,
	attendance: () => import("./attendance.json") as unknown as Promise<IOxford>,
	attention: () => import("./attention.json") as unknown as Promise<IOxford>,
	attitude: () => import("./attitude.json") as unknown as Promise<IOxford>,
	attorney: () => import("./attorney.json") as unknown as Promise<IOxford>,
	attract: () => import("./attract.json") as unknown as Promise<IOxford>,
	attraction: () => import("./attraction.json") as unknown as Promise<IOxford>,
	attractive: () => import("./attractive.json") as unknown as Promise<IOxford>,
	attribute: () => import("./attribute.json") as unknown as Promise<IOxford>,
};
