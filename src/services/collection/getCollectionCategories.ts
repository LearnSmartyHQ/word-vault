import type { ICollection, ICollectionCategory } from "../../types/index.js";
import { findCollection } from "./findCollection.js";


export function getCollectionCategories (id: string): ICollectionCategory[] | null {
  const collection: ICollection | null = findCollection(id);
  if (!collection) {
    return null;
  }

  return collection.categories
}
