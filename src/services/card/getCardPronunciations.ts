import { IOxford, IOxfordPronunciations } from "../../types/index.js";
import { findCard } from "./findCard.js";

export function getCardPronunciations(id: string): IOxfordPronunciations | null {
    const wordData: IOxford | null = findCard(id);

    return wordData?.pronunciations || null;
}
