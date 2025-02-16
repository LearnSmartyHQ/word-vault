import { ICard } from "../../../types/i-card.js";

import mrs_json from "./mrs.json" with { type: "json" };

export const dir_mr: Record<string, ICard> = {
  "mrs": mrs_json as unknown as ICard,
};
