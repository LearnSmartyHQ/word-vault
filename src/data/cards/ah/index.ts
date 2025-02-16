import { ICard } from "../../../types/i-card.js";

import ah_json from "./ah.json" with { type: "json" };
import ahead_json from "./ahead.json" with { type: "json" };

export const dir_ah: Record<string, ICard> = {
  "ah": ah_json as unknown as ICard,
  "ahead": ahead_json as unknown as ICard,
};
