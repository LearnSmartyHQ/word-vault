import { getAllCollections } from "./getAllCollections";
import { getPublishedCollections } from "./getCollectionsByStatus";

export function getTotalCardsAcrossCollections(): number | null {
    const allCollections = getAllCollections();
    if (!allCollections) {
        return null;
    }

    return allCollections.reduce((total, collection) => total + collection.totalCards, 0);
}

export function getTotalCardsAcrossPublishedCollections(): number | null {
    const publishedCollections = getPublishedCollections();
    if (!publishedCollections) {
        return null;
    }
    return publishedCollections.reduce((total, collection) => total + collection.totalCards, 0);
}