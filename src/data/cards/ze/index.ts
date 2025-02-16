import { ICard } from "../../../types/i-card.js";

import zero_json from "./zero.json" with { type: "json" };

export const dir_ze: Record<string, ICard> = {
  "zero": zero_json as unknown as ICard,
};
