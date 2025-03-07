import type { IOxford } from "../../../types/index.js";

export const dir_em: Record<string, () => Promise<IOxford>> = {
	email: () => import("./email.json") as unknown as Promise<IOxford>,
	embark: () => import("./embark.json") as unknown as Promise<IOxford>,
	embarrassed: () =>
		import("./embarrassed.json") as unknown as Promise<IOxford>,
	embarrassing: () =>
		import("./embarrassing.json") as unknown as Promise<IOxford>,
	embarrassment: () =>
		import("./embarrassment.json") as unknown as Promise<IOxford>,
	embassy: () => import("./embassy.json") as unknown as Promise<IOxford>,
	embed: () => import("./embed.json") as unknown as Promise<IOxford>,
	embody: () => import("./embody.json") as unknown as Promise<IOxford>,
	embrace: () => import("./embrace.json") as unknown as Promise<IOxford>,
	emerge: () => import("./emerge.json") as unknown as Promise<IOxford>,
	emergence: () => import("./emergence.json") as unknown as Promise<IOxford>,
	emergency: () => import("./emergency.json") as unknown as Promise<IOxford>,
	emission: () => import("./emission.json") as unknown as Promise<IOxford>,
	emotion: () => import("./emotion.json") as unknown as Promise<IOxford>,
	emotional: () => import("./emotional.json") as unknown as Promise<IOxford>,
	emotionally: () =>
		import("./emotionally.json") as unknown as Promise<IOxford>,
	emphasis: () => import("./emphasis.json") as unknown as Promise<IOxford>,
	emphasize: () => import("./emphasize.json") as unknown as Promise<IOxford>,
	empire: () => import("./empire.json") as unknown as Promise<IOxford>,
	empirical: () => import("./empirical.json") as unknown as Promise<IOxford>,
	employ: () => import("./employ.json") as unknown as Promise<IOxford>,
	employee: () => import("./employee.json") as unknown as Promise<IOxford>,
	employer: () => import("./employer.json") as unknown as Promise<IOxford>,
	employment: () => import("./employment.json") as unknown as Promise<IOxford>,
	empower: () => import("./empower.json") as unknown as Promise<IOxford>,
	empty: () => import("./empty.json") as unknown as Promise<IOxford>,
};
