import { ICard } from "../../../types/i-card.js";

import by_json from "./by.json" with { type: "json" };
import bye_json from "./bye.json" with { type: "json" };

export const dir_by: Record<string, ICard> = {
  "by": by_json as unknown as ICard,
  "bye": bye_json as unknown as ICard,
};
