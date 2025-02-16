import { ICard } from "../../../types/i-card.js";

import aesthetic_json from "./aesthetic.json" with { type: "json" };

export const dir_ae: Record<string, ICard> = {
  "aesthetic": aesthetic_json as unknown as ICard,
};
