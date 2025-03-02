import type { ICollection } from "../../types/index.js";
import { getAllCollections } from "./getAllCollections.js";

export function getAllCollectionCards(): string[] {
	const collections: ICollection[] = getAllCollections();
	const allWords = new Set<string>();

	for (const collection of collections) {
		for (const category of collection.categories) {
			for (const lesson of category.cards) {
				for (const word of lesson) {
					allWords.add(word);
				}
			}
		}
	}

	return Array.from(allWords).sort();
}
