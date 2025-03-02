export type CollectionStatus = "published" | "draft" | "deleted" | "locked";

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

export interface ICollectionCardDifficulties {
	A1: number;
	A2: number;
	B1: number;
	B2: number;
	C1: number;
	C2: number;
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
	totalCardsByDifficulty?: ICollectionCardDifficulties;
	status: CollectionStatus;
	createdAt: string;
	updatedAt?: string;
	categories: ICollectionCategory[];
}

export type IWordVaultCollections = {
	[key: string]: ICollection;
};
