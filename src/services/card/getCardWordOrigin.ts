import { IOxford } from "../../types";
import { findCard } from "./findCard";

export function getCardWordOrigin(id: string): string | null {
    const wordData: IOxford | null = findCard(id);

    return wordData?.wordOrigin || null;
}