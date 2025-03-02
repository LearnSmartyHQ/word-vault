import type { ICollection } from "../../types/index.js";
import { findCollection } from "./findCollection.js";

export function getCollectionCards(collectionSlug: string): string[] | null {
	const collection: ICollection | null = findCollection(collectionSlug);
	if (!collection) {
		return null;
	}

	const words = new Set<string>();
	for (const category of collection.categories) {
		for (const lesson of category.cards) {
			for (const word of lesson) {
				words.add(word);
			}
		}
	}

	return Array.from(words).sort();
}
