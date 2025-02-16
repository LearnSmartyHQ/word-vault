import { ICard } from "../../../types/i-card.js";

import owe_json from "./owe.json" with { type: "json" };
import own_json from "./own.json" with { type: "json" };
import owner_json from "./owner.json" with { type: "json" };
import ownership_json from "./ownership.json" with { type: "json" };

export const dir_ow: Record<string, ICard> = {
  "owe": owe_json as unknown as ICard,
  "own": own_json as unknown as ICard,
  "owner": owner_json as unknown as ICard,
  "ownership": ownership_json as unknown as ICard,
};
