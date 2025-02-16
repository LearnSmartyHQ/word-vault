import { ICard } from "../../../types/i-card.js";

import dynamic_json from "./dynamic.json" with { type: "json" };

export const dir_dy: Record<string, ICard> = {
  "dynamic": dynamic_json as unknown as ICard,
};
