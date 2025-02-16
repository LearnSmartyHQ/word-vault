import { ICard } from "../../../types/i-card.js";

import hydrogen_json from "./hydrogen.json" with { type: "json" };
import hypothesis_json from "./hypothesis.json" with { type: "json" };

export const dir_hy: Record<string, ICard> = {
  "hydrogen": hydrogen_json as unknown as ICard,
  "hypothesis": hypothesis_json as unknown as ICard,
};
