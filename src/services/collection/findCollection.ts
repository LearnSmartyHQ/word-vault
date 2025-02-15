import { wordVaultCollections } from '../../data/collections/index.js';
import { ICollection } from '../../types/index.js';

export function findCollection(slug: string): ICollection | null {

  const collection = wordVaultCollections.find((collection) => collection.slug === slug);

  if (!collection) {
    console.debug(`Collection with slug "${slug}" does not exist.`);
    return null;
  }

  return collection;
}
