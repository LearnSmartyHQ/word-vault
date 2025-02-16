import { ICard } from "../../../types/i-card.js";

import oh_json from "./oh.json" with { type: "json" };

export const dir_oh: Record<string, ICard> = {
  "oh": oh_json as unknown as ICard,
};
