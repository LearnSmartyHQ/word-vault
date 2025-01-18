import { IOxford, IOxfordPronunciations, } from "../../types";
import { findWord } from "./findWord";

export function getPronunciations(id: string): IOxfordPronunciations | null {
    const wordData: IOxford | null = findWord(id);

    return wordData?.pronunciations || null;
}
