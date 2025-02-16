import { ICard } from "../../../types/i-card.js";

import ticket_json from "./ticket.json" with { type: "json" };
import tide_json from "./tide.json" with { type: "json" };
import tidy_json from "./tidy.json" with { type: "json" };
import tie_json from "./tie.json" with { type: "json" };
import tight_json from "./tight.json" with { type: "json" };
import tighten_json from "./tighten.json" with { type: "json" };
import tile_json from "./tile.json" with { type: "json" };
import till_json from "./till.json" with { type: "json" };
import timber_json from "./timber.json" with { type: "json" };
import time_json from "./time.json" with { type: "json" };
import timely_json from "./timely.json" with { type: "json" };
import timing_json from "./timing.json" with { type: "json" };
import tin_json from "./tin.json" with { type: "json" };
import tiny_json from "./tiny.json" with { type: "json" };
import tip_json from "./tip.json" with { type: "json" };
import tire_json from "./tire.json" with { type: "json" };
import tired_json from "./tired.json" with { type: "json" };
import tissue_json from "./tissue.json" with { type: "json" };
import title_json from "./title.json" with { type: "json" };

export const dir_ti: Record<string, ICard> = {
  "ticket": ticket_json as unknown as ICard,
  "tide": tide_json as unknown as ICard,
  "tidy": tidy_json as unknown as ICard,
  "tie": tie_json as unknown as ICard,
  "tight": tight_json as unknown as ICard,
  "tighten": tighten_json as unknown as ICard,
  "tile": tile_json as unknown as ICard,
  "till": till_json as unknown as ICard,
  "timber": timber_json as unknown as ICard,
  "time": time_json as unknown as ICard,
  "timely": timely_json as unknown as ICard,
  "timing": timing_json as unknown as ICard,
  "tin": tin_json as unknown as ICard,
  "tiny": tiny_json as unknown as ICard,
  "tip": tip_json as unknown as ICard,
  "tire": tire_json as unknown as ICard,
  "tired": tired_json as unknown as ICard,
  "tissue": tissue_json as unknown as ICard,
  "title": title_json as unknown as ICard,
};
