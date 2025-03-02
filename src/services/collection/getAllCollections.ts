import { wordVaultCollections } from "../../data/collections/index.js";
import type { ICollection } from "../../types/index.js";

export function getAllCollections(): ICollection[] {
	return Object.values(wordVaultCollections).sort((a, b) => a?.id - b?.id);
}
