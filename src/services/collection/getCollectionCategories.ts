import { ICollection, ICollectionCategory } from "../../types";
import { findCollection } from "./findCollection";


export function getCollectionCategories (id: string): ICollectionCategory[] | null {
  const collection: ICollection | null = findCollection(id);
  if (!collection) {
    return null;
  }

  return collection.categories
}
