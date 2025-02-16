import { ICard } from "../../../types/i-card.js";

import odd_json from "./odd.json" with { type: "json" };
import odds_json from "./odds.json" with { type: "json" };

export const dir_od: Record<string, ICard> = {
  "odd": odd_json as unknown as ICard,
  "odds": odds_json as unknown as ICard,
};
