import { IOxfordPronunciation, IOxfordPronunciationRegion } from "../../types/index.js";
import { getCardPronunciation } from "./getCardPronunciation.js";

export interface IPronunciationAudioRequest {
    id: string;
    region: IOxfordPronunciationRegion;
    pronunciation: string;
}

export async function getCardPronunciationAudio({
    id,
    region,
    pronunciation
}: IPronunciationAudioRequest
): Promise<string | null> {
    const pronunciationList: IOxfordPronunciation[] | null = await getCardPronunciation({ id, region });

    if (!pronunciationList) {
        return null;
    }

    if (!pronunciation) {
        return pronunciationList?.[0]?.audio || null;
    }

    return pronunciationList.find(p => p.pronunciation === pronunciation)?.audio || null;
}

