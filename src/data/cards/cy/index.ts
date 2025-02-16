import { ICard } from "../../../types/i-card.js";

import cycle_json from "./cycle.json" with { type: "json" };
import cynical_json from "./cynical.json" with { type: "json" };

export const dir_cy: Record<string, ICard> = {
  "cycle": cycle_json as unknown as ICard,
  "cynical": cynical_json as unknown as ICard,
};
