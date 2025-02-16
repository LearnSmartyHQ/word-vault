import { ICard } from "../../../types/i-card.js";

import i_json from "./i.json" with { type: "json" };

export const dir_i: Record<string, ICard> = {
  "i": i_json as unknown as ICard,
};
