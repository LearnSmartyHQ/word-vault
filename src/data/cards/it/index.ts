import { ICard } from "../../../types/i-card.js";

import it_json from "./it.json" with { type: "json" };
import item_json from "./item.json" with { type: "json" };
import its_json from "./its.json" with { type: "json" };
import itself_json from "./itself.json" with { type: "json" };

export const dir_it: Record<string, ICard> = {
  "it": it_json as unknown as ICard,
  "item": item_json as unknown as ICard,
  "its": its_json as unknown as ICard,
  "itself": itself_json as unknown as ICard,
};
