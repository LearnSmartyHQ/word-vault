import { IOxfordPronunciation, IOxfordPronunciationRegion } from "../../types";
import { getPronunciation } from "./getPronunciation";

export interface IPronunciationAudioRequest {
    id: string;
    region: IOxfordPronunciationRegion;
    pronunciation: string;
}

export function getPronunciationAudio({
    id,
    region,
    pronunciation
}: IPronunciationAudioRequest
): string | null {
    const pronunciationList: IOxfordPronunciation[] | null = getPronunciation({ id, region });

    if (!pronunciationList) {
        return null;
    }

    if (!pronunciation) {
        return pronunciationList?.[0]?.audio || null;
    }

    return pronunciationList.find(p => p.pronunciation === pronunciation)?.audio || null;
}

