import { ICard } from "../../../types/i-card.js";

import ultimate_json from "./ultimate.json" with { type: "json" };
import ultimately_json from "./ultimately.json" with { type: "json" };

export const dir_ul: Record<string, ICard> = {
  "ultimate": ultimate_json as unknown as ICard,
  "ultimately": ultimately_json as unknown as ICard,
};
