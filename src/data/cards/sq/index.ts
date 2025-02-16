import { ICard } from "../../../types/i-card.js";

import squad_json from "./squad.json" with { type: "json" };
import squander_json from "./squander.json" with { type: "json" };
import square_json from "./square.json" with { type: "json" };
import squeeze_json from "./squeeze.json" with { type: "json" };

export const dir_sq: Record<string, ICard> = {
  "squad": squad_json as unknown as ICard,
  "squander": squander_json as unknown as ICard,
  "square": square_json as unknown as ICard,
  "squeeze": squeeze_json as unknown as ICard,
};
