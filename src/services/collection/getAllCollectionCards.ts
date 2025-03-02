import type {
	ICollection,
	ICollectionCardList,
	ICollectionCategory,
} from "../../types/index.js";
import { getAllCollections } from "./getAllCollections.js";

export function getAllCollectionCards(): string[] {
	const collections: ICollection[] = getAllCollections();
	const allWords = new Set<string>();

	for (const collection of collections as ICollection[]) {
		for (const category of collection.categories as ICollectionCategory[]) {
			for (const challenge of category.cards as ICollectionCardList) {
				allWords.add(challenge);
			}
		}
	}

	return Array.from(allWords).sort();
}
