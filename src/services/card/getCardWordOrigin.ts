import type { IOxford } from "../../types/index.js";
import { findCard } from "./findCard.js";

export async function getCardWordOrigin(id: string): Promise<string | null> {
    const wordData: IOxford | null = await findCard(id);

    return wordData?.wordOrigin || null;
}