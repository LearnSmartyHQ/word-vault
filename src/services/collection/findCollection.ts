import { CollectionMap } from "../../data/collections/index.js";
import type { ICollection } from "../../types/index.js";

export function findCollection(slug: string): ICollection | null {
	const collection = CollectionMap[slug];

	if (!collection) {
		console.debug(`Collection with slug "${slug}" does not exist.`);
		return null;
	}

	return collection;
}
