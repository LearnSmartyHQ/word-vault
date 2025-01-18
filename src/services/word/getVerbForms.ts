import { IOxford, IOxfordVerbForms } from "../../types";
import { findWord } from "./findWord";

export function getVerbForms(id: string): IOxfordVerbForms | null {
    const wordData: IOxford | null = findWord(id);

    return wordData?.verbForms || null;
}