import { ICard } from "../../../types/i-card.js";

import await_json from "./await.json" with { type: "json" };
import awake_json from "./awake.json" with { type: "json" };
import award_json from "./award.json" with { type: "json" };
import aware_json from "./aware.json" with { type: "json" };
import awareness_json from "./awareness.json" with { type: "json" };
import away_json from "./away.json" with { type: "json" };
import awesome_json from "./awesome.json" with { type: "json" };
import awful_json from "./awful.json" with { type: "json" };
import awkward_json from "./awkward.json" with { type: "json" };

export const dir_aw: Record<string, ICard> = {
  "await": await_json as unknown as ICard,
  "awake": awake_json as unknown as ICard,
  "award": award_json as unknown as ICard,
  "aware": aware_json as unknown as ICard,
  "awareness": awareness_json as unknown as ICard,
  "away": away_json as unknown as ICard,
  "awesome": awesome_json as unknown as ICard,
  "awful": awful_json as unknown as ICard,
  "awkward": awkward_json as unknown as ICard,
};
