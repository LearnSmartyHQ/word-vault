import { ICard } from "../../../types/i-card.js";

import tv_json from "./tv.json" with { type: "json" };

export const dir_tv: Record<string, ICard> = {
  "tv": tv_json as unknown as ICard,
};
