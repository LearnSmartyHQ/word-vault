import { ICard } from "../../../types/i-card.js";

import dvd_json from "./dvd.json" with { type: "json" };

export const dir_dv: Record<string, ICard> = {
  "dvd": dvd_json as unknown as ICard,
};
