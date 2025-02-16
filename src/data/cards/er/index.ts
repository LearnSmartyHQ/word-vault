import { ICard } from "../../../types/i-card.js";

import era_json from "./era.json" with { type: "json" };
import erect_json from "./erect.json" with { type: "json" };
import error_json from "./error.json" with { type: "json" };
import erupt_json from "./erupt.json" with { type: "json" };

export const dir_er: Record<string, ICard> = {
  "era": era_json as unknown as ICard,
  "erect": erect_json as unknown as ICard,
  "error": error_json as unknown as ICard,
  "erupt": erupt_json as unknown as ICard,
};
