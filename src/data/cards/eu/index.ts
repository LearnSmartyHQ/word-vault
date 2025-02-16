import { ICard } from "../../../types/i-card.js";

import euro_json from "./euro.json" with { type: "json" };
import europe_json from "./europe.json" with { type: "json" };

export const dir_eu: Record<string, ICard> = {
  "euro": euro_json as unknown as ICard,
  "europe": europe_json as unknown as ICard,
};
