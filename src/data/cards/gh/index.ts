import { ICard } from "../../../types/i-card.js";

import ghost_json from "./ghost.json" with { type: "json" };

export const dir_gh: Record<string, ICard> = {
  "ghost": ghost_json as unknown as ICard,
};
