import { IOxfordPronunciation, IOxfordPronunciationRegion, IWord } from "../../types";
import { findWord } from "./findWord";

export interface IPronunciationRequest {
    id: string;
    region: IOxfordPronunciationRegion;
}

export function getPronunciation({
    id,
    region
}: IPronunciationRequest
): IOxfordPronunciation[] | null {
    const wordData: IWord | null = findWord(id);

    return wordData?.pronunciations?.[region] || null;
}
