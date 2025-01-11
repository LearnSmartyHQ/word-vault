import { ICard } from "./i-card";

export type CollectionStatus = 'published' | 'draft' | 'deleted' | 'locked';


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
}
