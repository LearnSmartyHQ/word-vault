import type { IOxford } from "../../../types/index.js";

export const dir_ad: Record<string, () => Promise<IOxford>> = {
	ad: () => import("./ad.json") as unknown as Promise<IOxford>,
	adapt: () => import("./adapt.json") as unknown as Promise<IOxford>,
	adaptation: () => import("./adaptation.json") as unknown as Promise<IOxford>,
	add: () => import("./add.json") as unknown as Promise<IOxford>,
	addict: () => import("./addict.json") as unknown as Promise<IOxford>,
	addiction: () => import("./addiction.json") as unknown as Promise<IOxford>,
	addition: () => import("./addition.json") as unknown as Promise<IOxford>,
	additional: () => import("./additional.json") as unknown as Promise<IOxford>,
	additionally: () =>
		import("./additionally.json") as unknown as Promise<IOxford>,
	address: () => import("./address.json") as unknown as Promise<IOxford>,
	adequate: () => import("./adequate.json") as unknown as Promise<IOxford>,
	adequately: () => import("./adequately.json") as unknown as Promise<IOxford>,
	adhere: () => import("./adhere.json") as unknown as Promise<IOxford>,
	adjacent: () => import("./adjacent.json") as unknown as Promise<IOxford>,
	adjective: () => import("./adjective.json") as unknown as Promise<IOxford>,
	adjust: () => import("./adjust.json") as unknown as Promise<IOxford>,
	adjustment: () => import("./adjustment.json") as unknown as Promise<IOxford>,
	administer: () => import("./administer.json") as unknown as Promise<IOxford>,
	administration: () =>
		import("./administration.json") as unknown as Promise<IOxford>,
	administrative: () =>
		import("./administrative.json") as unknown as Promise<IOxford>,
	administrator: () =>
		import("./administrator.json") as unknown as Promise<IOxford>,
	admire: () => import("./admire.json") as unknown as Promise<IOxford>,
	admission: () => import("./admission.json") as unknown as Promise<IOxford>,
	admit: () => import("./admit.json") as unknown as Promise<IOxford>,
	adolescent: () => import("./adolescent.json") as unknown as Promise<IOxford>,
	adopt: () => import("./adopt.json") as unknown as Promise<IOxford>,
	adoption: () => import("./adoption.json") as unknown as Promise<IOxford>,
	adult: () => import("./adult.json") as unknown as Promise<IOxford>,
	advance: () => import("./advance.json") as unknown as Promise<IOxford>,
	advanced: () => import("./advanced.json") as unknown as Promise<IOxford>,
	advantage: () => import("./advantage.json") as unknown as Promise<IOxford>,
	adventure: () => import("./adventure.json") as unknown as Promise<IOxford>,
	adverse: () => import("./adverse.json") as unknown as Promise<IOxford>,
	advert: () => import("./advert.json") as unknown as Promise<IOxford>,
	advertise: () => import("./advertise.json") as unknown as Promise<IOxford>,
	advertisement: () =>
		import("./advertisement.json") as unknown as Promise<IOxford>,
	advertising: () =>
		import("./advertising.json") as unknown as Promise<IOxford>,
	advice: () => import("./advice.json") as unknown as Promise<IOxford>,
	advise: () => import("./advise.json") as unknown as Promise<IOxford>,
	adviser: () => import("./adviser.json") as unknown as Promise<IOxford>,
	advocate: () => import("./advocate.json") as unknown as Promise<IOxford>,
};
