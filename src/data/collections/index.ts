import { ICollection } from "../../types/i-collection.js";

import collection450 from "./450.json" with { type: "json" };
import collection504 from "./504.json" with { type: "json" };
import collectionOx3000 from "./ox3000.json" with { type: "json" };
import collectionOx5000 from "./ox5000.json" with { type: "json" };

export const wordVaultCollections: ICollection[] = [
  collection450 as unknown as ICollection,
  collection504 as unknown as ICollection,
  collectionOx3000 as unknown as ICollection,
  collectionOx5000 as unknown as ICollection,
];
