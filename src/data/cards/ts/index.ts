import { ICard } from "../../../types/i-card.js";

import tsunami_json from "./tsunami.json" with { type: "json" };

export const dir_ts: Record<string, ICard> = {
  "tsunami": tsunami_json as unknown as ICard,
};
