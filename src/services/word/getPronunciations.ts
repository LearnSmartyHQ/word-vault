import { IOxfordPronunciations, IWord } from "../../types";
import { findWord } from "./findWord";

export function getPronunciations(id: string): IOxfordPronunciations | null {
    const wordData: IWord | null = findWord(id);
    return wordData?.pronunciations || null;
}
