import { IOxfordPronunciation, IOxfordPronunciationRegion } from "../../types";
import { getCardPronunciation } from "./getCardPronunciation";

export interface IPronunciationAudioRequest {
    id: string;
    region: IOxfordPronunciationRegion;
    pronunciation: string;
}

export function getCardPronunciationAudio({
    id,
    region,
    pronunciation
}: IPronunciationAudioRequest
): string | null {
    const pronunciationList: IOxfordPronunciation[] | null = getCardPronunciation({ id, region });

    if (!pronunciationList) {
        return null;
    }

    if (!pronunciation) {
        return pronunciationList?.[0]?.audio || null;
    }

    return pronunciationList.find(p => p.pronunciation === pronunciation)?.audio || null;
}

