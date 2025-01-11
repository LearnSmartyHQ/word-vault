import { ICard, ICardStats } from "./i-card";

export type CollectionStatus = 'published' | 'draft' | 'deleted' | 'locked';

export interface ICollectionBoxStats {
    yes: number;
    expired: number;
    no: number;
    new: number;
    skip: number;
    box?: number;
    totalCards?: number;
}

export interface ICollectionBoxesStat {
    boxes: ICollectionBoxStats[];
}

export interface ICollectionStats extends ICardStats, ICollectionBoxesStat {
    /**
     * @description The top 10 most difficult cards with more no rate
     */
    mostDifficultCards: ICard[];
    /**
     * @description The 10 last cards which learned recently
     */
    lastCards: ICard[];

    /**
     * @description The 10 next cards which will be studied
     */
    nextCards: ICard[];

    totalExpired: number;
    totalExpiredRate: number;
    totalNew: number;
    totalNewRate: number;
    totalCards: number;
    updatedAt: Date;
}

export interface ICollection {
    id: number;
    title: string;
    slug: string;
    subject?: string;
    category?: string;
    description?: string;
    image?: string;
    difficulty?: string;
    totalCards: number;
    status: CollectionStatus;
    createdAt: string;
    updatedAt?: string;
    cards: ICard[];
    stats?: ICollectionStats;
}
