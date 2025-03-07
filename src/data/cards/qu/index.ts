import type { IOxford } from "../../../types/index.js";

export const dir_qu: Record<string, () => Promise<IOxford>> = {
	qualification: () =>
		import("./qualification.json") as unknown as Promise<IOxford>,
	qualified: () => import("./qualified.json") as unknown as Promise<IOxford>,
	qualify: () => import("./qualify.json") as unknown as Promise<IOxford>,
	quality: () => import("./quality.json") as unknown as Promise<IOxford>,
	quantity: () => import("./quantity.json") as unknown as Promise<IOxford>,
	quarter: () => import("./quarter.json") as unknown as Promise<IOxford>,
	queen: () => import("./queen.json") as unknown as Promise<IOxford>,
	quench: () => import("./quench.json") as unknown as Promise<IOxford>,
	query: () => import("./query.json") as unknown as Promise<IOxford>,
	quest: () => import("./quest.json") as unknown as Promise<IOxford>,
	question: () => import("./question.json") as unknown as Promise<IOxford>,
	questionnaire: () =>
		import("./questionnaire.json") as unknown as Promise<IOxford>,
	queue: () => import("./queue.json") as unknown as Promise<IOxford>,
	quick: () => import("./quick.json") as unknown as Promise<IOxford>,
	quickly: () => import("./quickly.json") as unknown as Promise<IOxford>,
	quid: () => import("./quid.json") as unknown as Promise<IOxford>,
	quiet: () => import("./quiet.json") as unknown as Promise<IOxford>,
	quietly: () => import("./quietly.json") as unknown as Promise<IOxford>,
	quit: () => import("./quit.json") as unknown as Promise<IOxford>,
	quite: () => import("./quite.json") as unknown as Promise<IOxford>,
	quota: () => import("./quota.json") as unknown as Promise<IOxford>,
	quotation: () => import("./quotation.json") as unknown as Promise<IOxford>,
	quote: () => import("./quote.json") as unknown as Promise<IOxford>,
};
