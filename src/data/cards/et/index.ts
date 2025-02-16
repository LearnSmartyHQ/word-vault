import { ICard } from "../../../types/i-card.js";

import eternal_json from "./eternal.json" with { type: "json" };
import ethic_json from "./ethic.json" with { type: "json" };
import ethical_json from "./ethical.json" with { type: "json" };
import ethnic_json from "./ethnic.json" with { type: "json" };

export const dir_et: Record<string, ICard> = {
  "eternal": eternal_json as unknown as ICard,
  "ethic": ethic_json as unknown as ICard,
  "ethical": ethical_json as unknown as ICard,
  "ethnic": ethnic_json as unknown as ICard,
};
