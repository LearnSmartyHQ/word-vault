import { IOxford, IOxfordVerbForms } from "../../types/index.js";
import { findCard } from "./findCard.js";

export async function getCardVerbForms(id: string): Promise<IOxfordVerbForms | null> {
    const wordData: IOxford | null = await findCard(id);

    return wordData?.verbForms || null;
}