import { IOxford, IOxfordPronunciation, IOxfordPronunciationRegion } from "../../types/index.js";
import { findCard } from "./findCard.js";

export interface ICardPronunciationRequest {
    id: string;
    region: IOxfordPronunciationRegion;
}

export function getCardPronunciation({
    id,
    region
}: ICardPronunciationRequest
): IOxfordPronunciation[] | null {
    const wordData: IOxford | null = findCard(id);

    return wordData?.pronunciations?.[region] || null;
}
