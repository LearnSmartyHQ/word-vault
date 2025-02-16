import { ICard } from "../../../types/i-card.js";

import occasion_json from "./occasion.json" with { type: "json" };
import occasional_json from "./occasional.json" with { type: "json" };
import occasionally_json from "./occasionally.json" with { type: "json" };
import occupant_json from "./occupant.json" with { type: "json" };
import occupation_json from "./occupation.json" with { type: "json" };
import occupy_json from "./occupy.json" with { type: "json" };
import occur_json from "./occur.json" with { type: "json" };
import occurrence_json from "./occurrence.json" with { type: "json" };
import ocean_json from "./ocean.json" with { type: "json" };
import october_json from "./october.json" with { type: "json" };

export const dir_oc: Record<string, ICard> = {
  "occasion": occasion_json as unknown as ICard,
  "occasional": occasional_json as unknown as ICard,
  "occasionally": occasionally_json as unknown as ICard,
  "occupant": occupant_json as unknown as ICard,
  "occupation": occupation_json as unknown as ICard,
  "occupy": occupy_json as unknown as ICard,
  "occur": occur_json as unknown as ICard,
  "occurrence": occurrence_json as unknown as ICard,
  "ocean": ocean_json as unknown as ICard,
  "october": october_json as unknown as ICard,
};
