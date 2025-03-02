import type { ICollection } from "../../types/index.js";
import { getAllCollections } from "./getAllCollections.js";

/**
 * Search for a word across all collections.
 *
 * @param word - The word to search for
 * @returns Array of collection slugs where the word appears
 */
export function searchWordInCollections(word: string): string[] | null {
	const allCollections: ICollection[] | null = getAllCollections();
	if (!allCollections) {
		return null;
	}

	const results: string[] = [];
	for (const collection of allCollections) {
		const found = collection.categories.some((category) =>
			category.cards.some((lesson) => lesson.includes(word)),
		);

		if (found) {
			results.push(collection.slug);
		}
	}

	return results;
}
