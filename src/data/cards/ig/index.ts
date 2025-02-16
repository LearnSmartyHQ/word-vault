import { ICard } from "../../../types/i-card.js";

import ignite_json from "./ignite.json" with { type: "json" };
import ignorance_json from "./ignorance.json" with { type: "json" };
import ignore_json from "./ignore.json" with { type: "json" };

export const dir_ig: Record<string, ICard> = {
  "ignite": ignite_json as unknown as ICard,
  "ignorance": ignorance_json as unknown as ICard,
  "ignore": ignore_json as unknown as ICard,
};
