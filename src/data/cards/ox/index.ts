import { ICard } from "../../../types/i-card.js";

import oxygen_json from "./oxygen.json" with { type: "json" };

export const dir_ox: Record<string, ICard> = {
  "oxygen": oxygen_json as unknown as ICard,
};
