import type { IOxford, IOxfordPronunciations } from "../../types/index.js";
import { findCard } from "./findCard.js";

export async function getCardPronunciations(
	id: string,
): Promise<IOxfordPronunciations | null> {
	const wordData: IOxford | null = await findCard(id);

	return wordData?.pronunciations || null;
}
