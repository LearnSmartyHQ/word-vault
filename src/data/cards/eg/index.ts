import { ICard } from "../../../types/i-card.js";

import egg_json from "./egg.json" with { type: "json" };
import ego_json from "./ego.json" with { type: "json" };

export const dir_eg: Record<string, ICard> = {
  "egg": egg_json as unknown as ICard,
  "ego": ego_json as unknown as ICard,
};
