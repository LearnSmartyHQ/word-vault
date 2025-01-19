import { IOxford, IOxfordVerbForms } from "../../types";
import { findCard } from "./findCard";

export function getCardVerbForms(id: string): IOxfordVerbForms | null {
    const wordData: IOxford | null = findCard(id);

    return wordData?.verbForms || null;
}