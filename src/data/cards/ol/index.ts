import { ICard } from "../../../types/i-card.js";

import old_fashioned_json from "./old-fashioned.json" with { type: "json" };
import old_json from "./old.json" with { type: "json" };

export const dir_ol: Record<string, ICard> = {
  "old-fashioned": old_fashioned_json as unknown as ICard,
  "old": old_json as unknown as ICard,
};
