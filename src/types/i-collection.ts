
export type CollectionStatus = 'published' | 'draft' | 'deleted' | 'locked';

export type ICollectionCard = string[];

export interface ICollectionCategory {
    id: number;
    title: string;
    slug: string;
    description?: string;
    image?: string;
    totalCards: number;
    cards: ICollectionCard[];
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
    categories: ICollectionCategory[];
}
