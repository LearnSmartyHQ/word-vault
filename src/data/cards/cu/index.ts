import type { IOxford } from "../../../types/index.js";

export const dir_cu: Record<string, () => Promise<IOxford>> = {
	cue: () => import("./cue.json") as unknown as Promise<IOxford>,
	culprit: () => import("./culprit.json") as unknown as Promise<IOxford>,
	cult: () => import("./cult.json") as unknown as Promise<IOxford>,
	cultivate: () => import("./cultivate.json") as unknown as Promise<IOxford>,
	cultural: () => import("./cultural.json") as unknown as Promise<IOxford>,
	culture: () => import("./culture.json") as unknown as Promise<IOxford>,
	cup: () => import("./cup.json") as unknown as Promise<IOxford>,
	cupboard: () => import("./cupboard.json") as unknown as Promise<IOxford>,
	cure: () => import("./cure.json") as unknown as Promise<IOxford>,
	curiosity: () => import("./curiosity.json") as unknown as Promise<IOxford>,
	curious: () => import("./curious.json") as unknown as Promise<IOxford>,
	curly: () => import("./curly.json") as unknown as Promise<IOxford>,
	currency: () => import("./currency.json") as unknown as Promise<IOxford>,
	current: () => import("./current.json") as unknown as Promise<IOxford>,
	currently: () => import("./currently.json") as unknown as Promise<IOxford>,
	curriculum: () => import("./curriculum.json") as unknown as Promise<IOxford>,
	curtain: () => import("./curtain.json") as unknown as Promise<IOxford>,
	curve: () => import("./curve.json") as unknown as Promise<IOxford>,
	curved: () => import("./curved.json") as unknown as Promise<IOxford>,
	cushion: () => import("./cushion.json") as unknown as Promise<IOxford>,
	custody: () => import("./custody.json") as unknown as Promise<IOxford>,
	custom: () => import("./custom.json") as unknown as Promise<IOxford>,
	customary: () => import("./customary.json") as unknown as Promise<IOxford>,
	customer: () => import("./customer.json") as unknown as Promise<IOxford>,
	cut: () => import("./cut.json") as unknown as Promise<IOxford>,
	cute: () => import("./cute.json") as unknown as Promise<IOxford>,
	cutting: () => import("./cutting.json") as unknown as Promise<IOxford>,
};
