import { ICard } from "../../../types/i-card.js";

import eight_json from "./eight.json" with { type: "json" };
import eighteen_json from "./eighteen.json" with { type: "json" };
import eighty_json from "./eighty.json" with { type: "json" };
import either_json from "./either.json" with { type: "json" };

export const dir_ei: Record<string, ICard> = {
  "eight": eight_json as unknown as ICard,
  "eighteen": eighteen_json as unknown as ICard,
  "eighty": eighty_json as unknown as ICard,
  "either": either_json as unknown as ICard,
};
