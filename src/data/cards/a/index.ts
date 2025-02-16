import { ICard } from "../../../types/i-card.js";

import a_json from "./a.json" with { type: "json" };

export const dir_a: Record<string, ICard> = {
  "a": a_json as unknown as ICard,
};
