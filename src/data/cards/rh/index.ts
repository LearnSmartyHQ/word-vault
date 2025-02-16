import { ICard } from "../../../types/i-card.js";

import rhetoric_json from "./rhetoric.json" with { type: "json" };
import rhythm_json from "./rhythm.json" with { type: "json" };

export const dir_rh: Record<string, ICard> = {
  "rhetoric": rhetoric_json as unknown as ICard,
  "rhythm": rhythm_json as unknown as ICard,
};
