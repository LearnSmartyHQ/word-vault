import type { IOxford } from "../../../types/index.js";

export const dir_ac: Record<string, () => Promise<IOxford>> = {
	academic: () => import("./academic.json") as unknown as Promise<IOxford>,
	academy: () => import("./academy.json") as unknown as Promise<IOxford>,
	accelerate: () => import("./accelerate.json") as unknown as Promise<IOxford>,
	accent: () => import("./accent.json") as unknown as Promise<IOxford>,
	accept: () => import("./accept.json") as unknown as Promise<IOxford>,
	acceptable: () => import("./acceptable.json") as unknown as Promise<IOxford>,
	acceptance: () => import("./acceptance.json") as unknown as Promise<IOxford>,
	access: () => import("./access.json") as unknown as Promise<IOxford>,
	accessible: () => import("./accessible.json") as unknown as Promise<IOxford>,
	accident: () => import("./accident.json") as unknown as Promise<IOxford>,
	accidentally: () =>
		import("./accidentally.json") as unknown as Promise<IOxford>,
	accommodate: () =>
		import("./accommodate.json") as unknown as Promise<IOxford>,
	accommodation: () =>
		import("./accommodation.json") as unknown as Promise<IOxford>,
	accompany: () => import("./accompany.json") as unknown as Promise<IOxford>,
	accomplish: () => import("./accomplish.json") as unknown as Promise<IOxford>,
	accomplishment: () =>
		import("./accomplishment.json") as unknown as Promise<IOxford>,
	accordance: () => import("./accordance.json") as unknown as Promise<IOxford>,
	"according-to": () =>
		import("./according-to.json") as unknown as Promise<IOxford>,
	accordingly: () =>
		import("./accordingly.json") as unknown as Promise<IOxford>,
	account: () => import("./account.json") as unknown as Promise<IOxford>,
	accountability: () =>
		import("./accountability.json") as unknown as Promise<IOxford>,
	accountable: () =>
		import("./accountable.json") as unknown as Promise<IOxford>,
	accountant: () => import("./accountant.json") as unknown as Promise<IOxford>,
	accumulate: () => import("./accumulate.json") as unknown as Promise<IOxford>,
	accumulation: () =>
		import("./accumulation.json") as unknown as Promise<IOxford>,
	accuracy: () => import("./accuracy.json") as unknown as Promise<IOxford>,
	accurate: () => import("./accurate.json") as unknown as Promise<IOxford>,
	accurately: () => import("./accurately.json") as unknown as Promise<IOxford>,
	accusation: () => import("./accusation.json") as unknown as Promise<IOxford>,
	accuse: () => import("./accuse.json") as unknown as Promise<IOxford>,
	accused: () => import("./accused.json") as unknown as Promise<IOxford>,
	achieve: () => import("./achieve.json") as unknown as Promise<IOxford>,
	achievement: () =>
		import("./achievement.json") as unknown as Promise<IOxford>,
	acid: () => import("./acid.json") as unknown as Promise<IOxford>,
	acknowledge: () =>
		import("./acknowledge.json") as unknown as Promise<IOxford>,
	acquaint: () => import("./acquaint.json") as unknown as Promise<IOxford>,
	acquire: () => import("./acquire.json") as unknown as Promise<IOxford>,
	acquisition: () =>
		import("./acquisition.json") as unknown as Promise<IOxford>,
	acre: () => import("./acre.json") as unknown as Promise<IOxford>,
	across: () => import("./across.json") as unknown as Promise<IOxford>,
	act: () => import("./act.json") as unknown as Promise<IOxford>,
	action: () => import("./action.json") as unknown as Promise<IOxford>,
	activate: () => import("./activate.json") as unknown as Promise<IOxford>,
	activation: () => import("./activation.json") as unknown as Promise<IOxford>,
	active: () => import("./active.json") as unknown as Promise<IOxford>,
	activist: () => import("./activist.json") as unknown as Promise<IOxford>,
	activity: () => import("./activity.json") as unknown as Promise<IOxford>,
	actor: () => import("./actor.json") as unknown as Promise<IOxford>,
	actress: () => import("./actress.json") as unknown as Promise<IOxford>,
	actual: () => import("./actual.json") as unknown as Promise<IOxford>,
	actually: () => import("./actually.json") as unknown as Promise<IOxford>,
	acute: () => import("./acute.json") as unknown as Promise<IOxford>,
};
