import { ICard } from "../../../types/i-card.js";

import iron_json from "./iron.json" with { type: "json" };
import ironic_json from "./ironic.json" with { type: "json" };
import ironically_json from "./ironically.json" with { type: "json" };
import irony_json from "./irony.json" with { type: "json" };
import irrelevant_json from "./irrelevant.json" with { type: "json" };

export const dir_ir: Record<string, ICard> = {
  "iron": iron_json as unknown as ICard,
  "ironic": ironic_json as unknown as ICard,
  "ironically": ironically_json as unknown as ICard,
  "irony": irony_json as unknown as ICard,
  "irrelevant": irrelevant_json as unknown as ICard,
};
