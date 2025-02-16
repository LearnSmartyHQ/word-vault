import { ICard } from "../../../types/i-card.js";

import twelve_json from "./twelve.json" with { type: "json" };
import twenty_json from "./twenty.json" with { type: "json" };
import twice_json from "./twice.json" with { type: "json" };
import twin_json from "./twin.json" with { type: "json" };
import twist_json from "./twist.json" with { type: "json" };
import two_json from "./two.json" with { type: "json" };

export const dir_tw: Record<string, ICard> = {
  "twelve": twelve_json as unknown as ICard,
  "twenty": twenty_json as unknown as ICard,
  "twice": twice_json as unknown as ICard,
  "twin": twin_json as unknown as ICard,
  "twist": twist_json as unknown as ICard,
  "two": two_json as unknown as ICard,
};
