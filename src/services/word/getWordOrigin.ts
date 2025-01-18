import { IOxford } from "../../types";
import { findWord } from "./findWord";

export function getWordOrigin(id: string): string | null {
    const wordData: IOxford | null = findWord(id);

    return wordData?.wordOrigin || null;
}