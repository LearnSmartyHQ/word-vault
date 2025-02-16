import { ICard } from "../../../types/i-card.js";

import epidemic_json from "./epidemic.json" with { type: "json" };
import episode_json from "./episode.json" with { type: "json" };

export const dir_ep: Record<string, ICard> = {
  "epidemic": epidemic_json as unknown as ICard,
  "episode": episode_json as unknown as ICard,
};
