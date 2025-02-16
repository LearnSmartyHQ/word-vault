import { ICard } from "../../../types/i-card.js";

import psychiatric_json from "./psychiatric.json" with { type: "json" };
import psychological_json from "./psychological.json" with { type: "json" };
import psychologist_json from "./psychologist.json" with { type: "json" };
import psychology_json from "./psychology.json" with { type: "json" };

export const dir_ps: Record<string, ICard> = {
  "psychiatric": psychiatric_json as unknown as ICard,
  "psychological": psychological_json as unknown as ICard,
  "psychologist": psychologist_json as unknown as ICard,
  "psychology": psychology_json as unknown as ICard,
};
