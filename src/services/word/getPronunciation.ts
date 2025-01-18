import { IOxford, IOxfordPronunciation, IOxfordPronunciationRegion } from "../../types";
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
    const wordData: IOxford | null = findWord(id);

    return wordData?.pronunciations?.[region] || null;
}
