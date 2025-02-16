import { ICard } from "../../../types/i-card.js";

import snake_json from "./snake.json" with { type: "json" };
import snap_json from "./snap.json" with { type: "json" };
import sneaker_json from "./sneaker.json" with { type: "json" };
import sneer_json from "./sneer.json" with { type: "json" };
import snow_json from "./snow.json" with { type: "json" };

export const dir_sn: Record<string, ICard> = {
  "snake": snake_json as unknown as ICard,
  "snap": snap_json as unknown as ICard,
  "sneaker": sneaker_json as unknown as ICard,
  "sneer": sneer_json as unknown as ICard,
  "snow": snow_json as unknown as ICard,
};
