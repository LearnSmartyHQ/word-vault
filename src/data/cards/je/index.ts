import type { IOxford } from "../../../types/index.js";

export const dir_je: Record<string, () => Promise<IOxford>> = {
	jealous: () => import("./jealous.json") as unknown as Promise<IOxford>,
	jeans: () => import("./jeans.json") as unknown as Promise<IOxford>,
	jeopardize: () => import("./jeopardize.json") as unknown as Promise<IOxford>,
	jest: () => import("./jest.json") as unknown as Promise<IOxford>,
	jesus: () => import("./jesus.json") as unknown as Promise<IOxford>,
	jet: () => import("./jet.json") as unknown as Promise<IOxford>,
	jewellery: () => import("./jewellery.json") as unknown as Promise<IOxford>,
	jewelry: () => import("./jewelry.json") as unknown as Promise<IOxford>,
};
