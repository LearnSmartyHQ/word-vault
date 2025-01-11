import { AnswerTypes, IOxford } from "./";
import { ICambridge } from "./dictionary/i-cambridge";

export interface ICardStats {
    totalTries: number;
    totalYes: number;
    totalYesRate: number;
    totalNo: number;
    totalNoRate: number;
    totalSkip: number;
    totalSkipRate: number;
    lastTry: Date | undefined;
    lastAnswer: AnswerTypes;
    nextReview: Date | undefined;
    isNew: boolean;
    isReviewed: boolean;
    isExpired: boolean;
    boxLevel?: number;
}

export interface ICard {
    id: number;
    slug: string;
    subcategory?: string;
    front: string;
    frontText?: string;
    frontLang?: string;
    frontImage?: string;
    frontSound?: string;
    frontVideo?: string;
    back: string;
    backText?: string;
    backLang?: string;
    backImage?: string;
    backSound?: string;
    backVideo?: string;
    cambridge?: ICambridge;
    oxford?: IOxford;
    difficulty?: string;
    createdAt: string;
    updatedAt?: string;
    usedIn?: string[];
    stats?: ICardStats;
}
