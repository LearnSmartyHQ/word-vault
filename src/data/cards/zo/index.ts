import { ICard } from "../../../types/i-card.js";

import zone_json from "./zone.json" with { type: "json" };

export const dir_zo: Record<string, ICard> = {
  "zone": zone_json as unknown as ICard,
};
