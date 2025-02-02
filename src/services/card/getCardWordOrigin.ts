import { IOxford } from "../../types/index.js";
import { findCard } from "./findCard.js";

export function getCardWordOrigin(id: string): string | null {
    const wordData: IOxford | null = findCard(id);

    return wordData?.wordOrigin || null;
}