import { ICard } from "../../../types/i-card.js";

import oil_json from "./oil.json" with { type: "json" };

export const dir_oi: Record<string, ICard> = {
  "oil": oil_json as unknown as ICard,
};
