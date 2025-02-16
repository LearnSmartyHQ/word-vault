import { ICard } from "../../../types/i-card.js";

import yield_json from "./yield.json" with { type: "json" };

export const dir_yi: Record<string, ICard> = {
  "yield": yield_json as unknown as ICard,
};
