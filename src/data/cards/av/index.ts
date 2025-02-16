import { ICard } from "../../../types/i-card.js";

import availability_json from "./availability.json" with { type: "json" };
import available_json from "./available.json" with { type: "json" };
import average_json from "./average.json" with { type: "json" };
import avoid_json from "./avoid.json" with { type: "json" };

export const dir_av: Record<string, ICard> = {
  "availability": availability_json as unknown as ICard,
  "available": available_json as unknown as ICard,
  "average": average_json as unknown as ICard,
  "avoid": avoid_json as unknown as ICard,
};
