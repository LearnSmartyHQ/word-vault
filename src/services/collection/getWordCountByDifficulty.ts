import { ICollection } from "../../types";
import { getAllCollections } from "./getAllCollections";

export function getWordCountByDifficulty(): Record<string, number> | null {
    const allCollections: ICollection[] | null = getAllCollections();
    if (!allCollections) {
        return null;
    }

    const difficultyCounts: Record<string, number> = {};

    allCollections.forEach((collection) => {
      const difficulty = collection.difficulty || 'Unknown';
      difficultyCounts[difficulty] = (difficultyCounts[difficulty] || 0) + collection.totalCards;
    });

    return difficultyCounts;
  }