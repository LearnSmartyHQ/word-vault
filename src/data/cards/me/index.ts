import type { IOxford } from "../../../types/index.js";

export const dir_me: Record<string, () => Promise<IOxford>> = {
	me: () => import("./me.json") as unknown as Promise<IOxford>,
	meal: () => import("./meal.json") as unknown as Promise<IOxford>,
	mean: () => import("./mean.json") as unknown as Promise<IOxford>,
	meaning: () => import("./meaning.json") as unknown as Promise<IOxford>,
	meaningful: () => import("./meaningful.json") as unknown as Promise<IOxford>,
	means: () => import("./means.json") as unknown as Promise<IOxford>,
	meantime: () => import("./meantime.json") as unknown as Promise<IOxford>,
	meanwhile: () => import("./meanwhile.json") as unknown as Promise<IOxford>,
	measure: () => import("./measure.json") as unknown as Promise<IOxford>,
	measurement: () =>
		import("./measurement.json") as unknown as Promise<IOxford>,
	meat: () => import("./meat.json") as unknown as Promise<IOxford>,
	mechanic: () => import("./mechanic.json") as unknown as Promise<IOxford>,
	mechanical: () => import("./mechanical.json") as unknown as Promise<IOxford>,
	mechanism: () => import("./mechanism.json") as unknown as Promise<IOxford>,
	medal: () => import("./medal.json") as unknown as Promise<IOxford>,
	media: () => import("./media.json") as unknown as Promise<IOxford>,
	mediate: () => import("./mediate.json") as unknown as Promise<IOxford>,
	medical: () => import("./medical.json") as unknown as Promise<IOxford>,
	medication: () => import("./medication.json") as unknown as Promise<IOxford>,
	medicine: () => import("./medicine.json") as unknown as Promise<IOxford>,
	medieval: () => import("./medieval.json") as unknown as Promise<IOxford>,
	mediocre: () => import("./mediocre.json") as unknown as Promise<IOxford>,
	meditation: () => import("./meditation.json") as unknown as Promise<IOxford>,
	medium: () => import("./medium.json") as unknown as Promise<IOxford>,
	meet: () => import("./meet.json") as unknown as Promise<IOxford>,
	meeting: () => import("./meeting.json") as unknown as Promise<IOxford>,
	melody: () => import("./melody.json") as unknown as Promise<IOxford>,
	melt: () => import("./melt.json") as unknown as Promise<IOxford>,
	member: () => import("./member.json") as unknown as Promise<IOxford>,
	membership: () => import("./membership.json") as unknown as Promise<IOxford>,
	memo: () => import("./memo.json") as unknown as Promise<IOxford>,
	memoir: () => import("./memoir.json") as unknown as Promise<IOxford>,
	memorable: () => import("./memorable.json") as unknown as Promise<IOxford>,
	memorial: () => import("./memorial.json") as unknown as Promise<IOxford>,
	memory: () => import("./memory.json") as unknown as Promise<IOxford>,
	menace: () => import("./menace.json") as unknown as Promise<IOxford>,
	mental: () => import("./mental.json") as unknown as Promise<IOxford>,
	mention: () => import("./mention.json") as unknown as Promise<IOxford>,
	mentor: () => import("./mentor.json") as unknown as Promise<IOxford>,
	menu: () => import("./menu.json") as unknown as Promise<IOxford>,
	merchant: () => import("./merchant.json") as unknown as Promise<IOxford>,
	mercy: () => import("./mercy.json") as unknown as Promise<IOxford>,
	mere: () => import("./mere.json") as unknown as Promise<IOxford>,
	merely: () => import("./merely.json") as unknown as Promise<IOxford>,
	merge: () => import("./merge.json") as unknown as Promise<IOxford>,
	merger: () => import("./merger.json") as unknown as Promise<IOxford>,
	merit: () => import("./merit.json") as unknown as Promise<IOxford>,
	mess: () => import("./mess.json") as unknown as Promise<IOxford>,
	message: () => import("./message.json") as unknown as Promise<IOxford>,
	messy: () => import("./messy.json") as unknown as Promise<IOxford>,
	metal: () => import("./metal.json") as unknown as Promise<IOxford>,
	metaphor: () => import("./metaphor.json") as unknown as Promise<IOxford>,
	meter: () => import("./meter.json") as unknown as Promise<IOxford>,
	method: () => import("./method.json") as unknown as Promise<IOxford>,
	methodology: () =>
		import("./methodology.json") as unknown as Promise<IOxford>,
	metre: () => import("./metre.json") as unknown as Promise<IOxford>,
};
