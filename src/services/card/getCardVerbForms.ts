import { IOxford, IOxfordVerbForms } from "../../types/index.js";
import { findCard } from "./findCard.js";

export function getCardVerbForms(id: string): IOxfordVerbForms | null {
    const wordData: IOxford | null = findCard(id);

    return wordData?.verbForms || null;
}