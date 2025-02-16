import { ICard } from "../../../types/i-card.js";

import yard_json from "./yard.json" with { type: "json" };

export const dir_ya: Record<string, ICard> = {
  "yard": yard_json as unknown as ICard,
};
