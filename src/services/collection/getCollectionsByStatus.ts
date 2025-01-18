import { CollectionStatus, ICollection } from '../../types';
import { getAllCollections } from './getAllCollections';

export function getCollectionsByStatus(status: CollectionStatus): ICollection[] | null {
  const allCollections = getAllCollections();
  if (!allCollections) {
    return null;
  }

  return allCollections.filter((collection) => collection.status === status);
}

export function getPublishedCollections(): ICollection[] | null {
  return getCollectionsByStatus('published');
}
