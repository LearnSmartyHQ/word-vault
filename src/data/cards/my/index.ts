import { ICard } from "../../../types/i-card.js";

import my_json from "./my.json" with { type: "json" };
import myself_json from "./myself.json" with { type: "json" };
import mysterious_json from "./mysterious.json" with { type: "json" };
import mystery_json from "./mystery.json" with { type: "json" };
import myth_json from "./myth.json" with { type: "json" };
import mythology_json from "./mythology.json" with { type: "json" };

export const dir_my: Record<string, ICard> = {
  "my": my_json as unknown as ICard,
  "myself": myself_json as unknown as ICard,
  "mysterious": mysterious_json as unknown as ICard,
  "mystery": mystery_json as unknown as ICard,
  "myth": myth_json as unknown as ICard,
  "mythology": mythology_json as unknown as ICard,
};
