import { ICard } from "../../../types/i-card.js";

import oath_json from "./oath.json" with { type: "json" };

export const dir_oa: Record<string, ICard> = {
  "oath": oath_json as unknown as ICard,
};
