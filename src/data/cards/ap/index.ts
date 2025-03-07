import type { IOxford } from "../../../types/index.js";

export const dir_ap: Record<string, () => Promise<IOxford>> = {
	apart: () => import("./apart.json") as unknown as Promise<IOxford>,
	apartment: () => import("./apartment.json") as unknown as Promise<IOxford>,
	apologize: () => import("./apologize.json") as unknown as Promise<IOxford>,
	apology: () => import("./apology.json") as unknown as Promise<IOxford>,
	app: () => import("./app.json") as unknown as Promise<IOxford>,
	apparatus: () => import("./apparatus.json") as unknown as Promise<IOxford>,
	apparel: () => import("./apparel.json") as unknown as Promise<IOxford>,
	apparent: () => import("./apparent.json") as unknown as Promise<IOxford>,
	apparently: () => import("./apparently.json") as unknown as Promise<IOxford>,
	appeal: () => import("./appeal.json") as unknown as Promise<IOxford>,
	appealing: () => import("./appealing.json") as unknown as Promise<IOxford>,
	appear: () => import("./appear.json") as unknown as Promise<IOxford>,
	appearance: () => import("./appearance.json") as unknown as Promise<IOxford>,
	appetite: () => import("./appetite.json") as unknown as Promise<IOxford>,
	applaud: () => import("./applaud.json") as unknown as Promise<IOxford>,
	apple: () => import("./apple.json") as unknown as Promise<IOxford>,
	applicable: () => import("./applicable.json") as unknown as Promise<IOxford>,
	applicant: () => import("./applicant.json") as unknown as Promise<IOxford>,
	application: () =>
		import("./application.json") as unknown as Promise<IOxford>,
	apply: () => import("./apply.json") as unknown as Promise<IOxford>,
	appoint: () => import("./appoint.json") as unknown as Promise<IOxford>,
	appointment: () =>
		import("./appointment.json") as unknown as Promise<IOxford>,
	appreciate: () => import("./appreciate.json") as unknown as Promise<IOxford>,
	appreciation: () =>
		import("./appreciation.json") as unknown as Promise<IOxford>,
	approach: () => import("./approach.json") as unknown as Promise<IOxford>,
	appropriate: () =>
		import("./appropriate.json") as unknown as Promise<IOxford>,
	appropriately: () =>
		import("./appropriately.json") as unknown as Promise<IOxford>,
	approval: () => import("./approval.json") as unknown as Promise<IOxford>,
	approve: () => import("./approve.json") as unknown as Promise<IOxford>,
	approximate: () =>
		import("./approximate.json") as unknown as Promise<IOxford>,
	approximately: () =>
		import("./approximately.json") as unknown as Promise<IOxford>,
	april: () => import("./april.json") as unknown as Promise<IOxford>,
	aptitude: () => import("./aptitude.json") as unknown as Promise<IOxford>,
};
