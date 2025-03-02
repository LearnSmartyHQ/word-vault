import type { CollectionStatus, ICollection } from "../../types/index.js";
import { getAllCollections } from "./getAllCollections.js";

export function getCollectionsByStatus(
	status: CollectionStatus,
): ICollection[] | null {
	const allCollections = getAllCollections();
	if (!allCollections) {
		return null;
	}

	return allCollections.filter((collection) => collection.status === status);
}

export function getPublishedCollections(): ICollection[] | null {
	return getCollectionsByStatus("published");
}
