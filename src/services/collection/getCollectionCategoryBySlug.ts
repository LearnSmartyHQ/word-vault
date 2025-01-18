import { ICollection, ICollectionCategory } from "../../types";
import { findCollection } from "./findCollection";

interface IGetCollectionCategoryBySlug {
    collectionId: string;
    categorySlug: string;
}

export function getCollectionCategoryBySlug ({ collectionId, categorySlug }: IGetCollectionCategoryBySlug): ICollectionCategory | null {
  const collection: ICollection | null = findCollection(collectionId);
  if (!collection) {
    return null;
  }

  const collectionCategories: ICollectionCategory[] = collection.categories;

  const category: ICollectionCategory | undefined = collectionCategories.find((category) => category.slug === categorySlug);
  if (!category) {
    return null;
  }

  return category;
}
