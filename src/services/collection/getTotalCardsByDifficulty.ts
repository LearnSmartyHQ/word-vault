import type {
	ICollection,
	ICollectionCardDifficulties,
} from "../../types/index.js";
import { getAllCollections } from "./getAllCollections.js";

export function getTotalCardsByDifficulty(): ICollectionCardDifficulties {
	const allCollections: ICollection[] | null = getAllCollections();

	const totalCounts: ICollectionCardDifficulties = {
		A1: 0,
		A2: 0,
		B1: 0,
		B2: 0,
		C1: 0,
		C2: 0,
	};

	if (!allCollections) {
		return totalCounts;
	}

	for (const collection of allCollections) {
		if (collection?.totalCardsByDifficulty) {
			for (const difficulty of Object.keys(collection.totalCardsByDifficulty)) {
				const key = difficulty as keyof ICollectionCardDifficulties;
				const difficultyCount = collection.totalCardsByDifficulty?.[key];

				if (difficultyCount) {
					totalCounts[key] += difficultyCount;
				}
			}
		}
	}

	return totalCounts;
}
