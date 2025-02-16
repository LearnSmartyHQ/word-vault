import { ICard } from "../../../types/i-card.js";

import urban_json from "./urban.json" with { type: "json" };
import urge_json from "./urge.json" with { type: "json" };
import urgent_json from "./urgent.json" with { type: "json" };

export const dir_ur: Record<string, ICard> = {
  "urban": urban_json as unknown as ICard,
  "urge": urge_json as unknown as ICard,
  "urgent": urgent_json as unknown as ICard,
};
