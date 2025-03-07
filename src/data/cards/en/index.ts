import type { IOxford } from "../../../types/index.js";

export const dir_en: Record<string, () => Promise<IOxford>> = {
	enable: () => import("./enable.json") as unknown as Promise<IOxford>,
	enact: () => import("./enact.json") as unknown as Promise<IOxford>,
	encompass: () => import("./encompass.json") as unknown as Promise<IOxford>,
	encounter: () => import("./encounter.json") as unknown as Promise<IOxford>,
	encourage: () => import("./encourage.json") as unknown as Promise<IOxford>,
	encouragement: () =>
		import("./encouragement.json") as unknown as Promise<IOxford>,
	encouraging: () =>
		import("./encouraging.json") as unknown as Promise<IOxford>,
	end: () => import("./end.json") as unknown as Promise<IOxford>,
	endeavor: () => import("./endeavor.json") as unknown as Promise<IOxford>,
	endeavour: () => import("./endeavour.json") as unknown as Promise<IOxford>,
	ending: () => import("./ending.json") as unknown as Promise<IOxford>,
	endless: () => import("./endless.json") as unknown as Promise<IOxford>,
	endorse: () => import("./endorse.json") as unknown as Promise<IOxford>,
	endorsement: () =>
		import("./endorsement.json") as unknown as Promise<IOxford>,
	endure: () => import("./endure.json") as unknown as Promise<IOxford>,
	enemy: () => import("./enemy.json") as unknown as Promise<IOxford>,
	energy: () => import("./energy.json") as unknown as Promise<IOxford>,
	enforce: () => import("./enforce.json") as unknown as Promise<IOxford>,
	enforcement: () =>
		import("./enforcement.json") as unknown as Promise<IOxford>,
	engage: () => import("./engage.json") as unknown as Promise<IOxford>,
	engaged: () => import("./engaged.json") as unknown as Promise<IOxford>,
	engagement: () => import("./engagement.json") as unknown as Promise<IOxford>,
	engaging: () => import("./engaging.json") as unknown as Promise<IOxford>,
	engine: () => import("./engine.json") as unknown as Promise<IOxford>,
	engineer: () => import("./engineer.json") as unknown as Promise<IOxford>,
	engineering: () =>
		import("./engineering.json") as unknown as Promise<IOxford>,
	english: () => import("./english.json") as unknown as Promise<IOxford>,
	enhance: () => import("./enhance.json") as unknown as Promise<IOxford>,
	enjoy: () => import("./enjoy.json") as unknown as Promise<IOxford>,
	enjoyable: () => import("./enjoyable.json") as unknown as Promise<IOxford>,
	enlarge: () => import("./enlarge.json") as unknown as Promise<IOxford>,
	enormous: () => import("./enormous.json") as unknown as Promise<IOxford>,
	enough: () => import("./enough.json") as unknown as Promise<IOxford>,
	enquire: () => import("./enquire.json") as unknown as Promise<IOxford>,
	enquiry: () => import("./enquiry.json") as unknown as Promise<IOxford>,
	enrich: () => import("./enrich.json") as unknown as Promise<IOxford>,
	enrol: () => import("./enrol.json") as unknown as Promise<IOxford>,
	enroll: () => import("./enroll.json") as unknown as Promise<IOxford>,
	ensue: () => import("./ensue.json") as unknown as Promise<IOxford>,
	ensure: () => import("./ensure.json") as unknown as Promise<IOxford>,
	enter: () => import("./enter.json") as unknown as Promise<IOxford>,
	enterprise: () => import("./enterprise.json") as unknown as Promise<IOxford>,
	entertain: () => import("./entertain.json") as unknown as Promise<IOxford>,
	entertaining: () =>
		import("./entertaining.json") as unknown as Promise<IOxford>,
	entertainment: () =>
		import("./entertainment.json") as unknown as Promise<IOxford>,
	enthusiasm: () => import("./enthusiasm.json") as unknown as Promise<IOxford>,
	enthusiast: () => import("./enthusiast.json") as unknown as Promise<IOxford>,
	enthusiastic: () =>
		import("./enthusiastic.json") as unknown as Promise<IOxford>,
	entire: () => import("./entire.json") as unknown as Promise<IOxford>,
	entirely: () => import("./entirely.json") as unknown as Promise<IOxford>,
	entitle: () => import("./entitle.json") as unknown as Promise<IOxford>,
	entity: () => import("./entity.json") as unknown as Promise<IOxford>,
	entrance: () => import("./entrance.json") as unknown as Promise<IOxford>,
	entrepreneur: () =>
		import("./entrepreneur.json") as unknown as Promise<IOxford>,
	entry: () => import("./entry.json") as unknown as Promise<IOxford>,
	envelope: () => import("./envelope.json") as unknown as Promise<IOxford>,
	environment: () =>
		import("./environment.json") as unknown as Promise<IOxford>,
	environmental: () =>
		import("./environmental.json") as unknown as Promise<IOxford>,
	envy: () => import("./envy.json") as unknown as Promise<IOxford>,
};
