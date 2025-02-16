import { ICard } from "../../../types/i-card.js";

import other_json from "./other.json" with { type: "json" };
import others_json from "./others.json" with { type: "json" };
import otherwise_json from "./otherwise.json" with { type: "json" };

export const dir_ot: Record<string, ICard> = {
  "other": other_json as unknown as ICard,
  "others": others_json as unknown as ICard,
  "otherwise": otherwise_json as unknown as ICard,
};
