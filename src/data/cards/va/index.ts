import type { IOxford } from "../../../types/index.js";

export const dir_va: Record<string, () => Promise<IOxford>> = {
	vacant: () => import("./vacant.json") as unknown as Promise<IOxford>,
	vacation: () => import("./vacation.json") as unknown as Promise<IOxford>,
	vaccinate: () => import("./vaccinate.json") as unknown as Promise<IOxford>,
	vaccine: () => import("./vaccine.json") as unknown as Promise<IOxford>,
	vacuum: () => import("./vacuum.json") as unknown as Promise<IOxford>,
	vague: () => import("./vague.json") as unknown as Promise<IOxford>,
	vain: () => import("./vain.json") as unknown as Promise<IOxford>,
	valiant: () => import("./valiant.json") as unknown as Promise<IOxford>,
	valid: () => import("./valid.json") as unknown as Promise<IOxford>,
	validate: () => import("./validate.json") as unknown as Promise<IOxford>,
	validity: () => import("./validity.json") as unknown as Promise<IOxford>,
	valley: () => import("./valley.json") as unknown as Promise<IOxford>,
	valor: () => import("./valor.json") as unknown as Promise<IOxford>,
	valuable: () => import("./valuable.json") as unknown as Promise<IOxford>,
	value: () => import("./value.json") as unknown as Promise<IOxford>,
	van: () => import("./van.json") as unknown as Promise<IOxford>,
	vandal: () => import("./vandal.json") as unknown as Promise<IOxford>,
	vanish: () => import("./vanish.json") as unknown as Promise<IOxford>,
	vapor: () => import("./vapor.json") as unknown as Promise<IOxford>,
	variable: () => import("./variable.json") as unknown as Promise<IOxford>,
	variation: () => import("./variation.json") as unknown as Promise<IOxford>,
	varied: () => import("./varied.json") as unknown as Promise<IOxford>,
	variety: () => import("./variety.json") as unknown as Promise<IOxford>,
	various: () => import("./various.json") as unknown as Promise<IOxford>,
	vary: () => import("./vary.json") as unknown as Promise<IOxford>,
	vast: () => import("./vast.json") as unknown as Promise<IOxford>,
};
