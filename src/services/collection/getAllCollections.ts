import { wordVaultCollections } from '../../data/collections/index.js';
import { ICollection } from '../../types/index.js';

export function getAllCollections(): ICollection[] {
  return wordVaultCollections;
}
