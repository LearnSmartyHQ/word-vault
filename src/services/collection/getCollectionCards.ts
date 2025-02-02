import { ICollection } from "../../types/index.js";
import { findCollection } from "./findCollection.js";

export function getCollectionCards(collectionSlug: string): string[] | null {
  const collection: ICollection | null = findCollection(collectionSlug);
  if (!collection) {
    return null;
  }

  const words = new Set<string>();
  collection.categories.forEach((category) => {
    category.cards.forEach((lesson) => {
      lesson.forEach((word) => words.add(word));
    });
  });

  return Array.from(words);
}
