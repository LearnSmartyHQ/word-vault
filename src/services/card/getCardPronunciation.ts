import type {
	IOxford,
	IOxfordPronunciation,
	IOxfordPronunciationRegion,
} from "../../types/index.js";
import { findCard } from "./findCard.js";

export interface ICardPronunciationRequest {
	id: string;
	region: IOxfordPronunciationRegion;
}

export async function getCardPronunciation({
	id,
	region,
}: ICardPronunciationRequest): Promise<IOxfordPronunciation[] | null> {
	const wordData: IOxford | null = await findCard(id);

	return wordData?.pronunciations?.[region] || null;
}
