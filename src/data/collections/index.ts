import type { ICollection, IWordVaultCollections } from "../../types/i-collection.js";

import collection450JSON from "./450.json" with { type: "json" };
import collection504JSON from "./504.json" with { type: "json" };
import collectionOx3000JSON from "./ox3000.json" with { type: "json" };
import collectionOx5000JSON from "./ox5000.json" with { type: "json" };

export const collection450: ICollection = collection450JSON as unknown as ICollection;
export const collection504: ICollection = collection504JSON as unknown as ICollection;
export const collectionOx3000: ICollection = collectionOx3000JSON as unknown as ICollection;
export const collectionOx5000: ICollection = collectionOx5000JSON as unknown as ICollection;

export const CollectionMap: IWordVaultCollections = {
  '450': collection450,
  '504': collection504,
  'ox3000': collectionOx3000,
  'ox5000': collectionOx5000,
} as const;

export const wordVaultCollections = Object.values(CollectionMap);
