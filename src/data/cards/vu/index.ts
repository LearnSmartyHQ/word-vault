import { ICard } from "../../../types/i-card.js";

import vulnerability_json from "./vulnerability.json" with { type: "json" };
import vulnerable_json from "./vulnerable.json" with { type: "json" };

export const dir_vu: Record<string, ICard> = {
  "vulnerability": vulnerability_json as unknown as ICard,
  "vulnerable": vulnerable_json as unknown as ICard,
};
