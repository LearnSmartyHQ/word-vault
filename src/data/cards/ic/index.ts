import { ICard } from "../../../types/i-card.js";

import ice_cream_json from "./ice-cream.json" with { type: "json" };
import ice_json from "./ice.json" with { type: "json" };
import icon_json from "./icon.json" with { type: "json" };

export const dir_ic: Record<string, ICard> = {
  "ice-cream": ice_cream_json as unknown as ICard,
  "ice": ice_json as unknown as ICard,
  "icon": icon_json as unknown as ICard,
};
