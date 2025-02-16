import { ICard } from "../../../types/i-card.js";

import ugly_json from "./ugly.json" with { type: "json" };

export const dir_ug: Record<string, ICard> = {
  "ugly": ugly_json as unknown as ICard,
};
