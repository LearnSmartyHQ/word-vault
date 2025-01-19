import { IOxford, IOxfordPronunciations, } from "../../types";
import { findCard } from "./findCard";

export function getCardPronunciations(id: string): IOxfordPronunciations | null {
    const wordData: IOxford | null = findCard(id);

    return wordData?.pronunciations || null;
}
