import type { IOxford } from "../../../types/index.js";

export const dir_ec: Record<string, () => Promise<IOxford>> = {
	echo: () => import("./echo.json") as unknown as Promise<IOxford>,
	ecological: () => import("./ecological.json") as unknown as Promise<IOxford>,
	economic: () => import("./economic.json") as unknown as Promise<IOxford>,
	economical: () => import("./economical.json") as unknown as Promise<IOxford>,
	economics: () => import("./economics.json") as unknown as Promise<IOxford>,
	economist: () => import("./economist.json") as unknown as Promise<IOxford>,
	economy: () => import("./economy.json") as unknown as Promise<IOxford>,
};
