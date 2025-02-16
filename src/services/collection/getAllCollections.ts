import { wordVaultCollections } from '../../data/collections/index.js';
import type { ICollection } from '../../types/index.js';

export function getAllCollections(): ICollection[] {
  return wordVaultCollections;
}
