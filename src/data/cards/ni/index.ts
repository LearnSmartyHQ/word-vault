import { ICard } from "../../../types/i-card.js";

import nice_json from "./nice.json" with { type: "json" };
import nicely_json from "./nicely.json" with { type: "json" };
import niche_json from "./niche.json" with { type: "json" };
import nickel_json from "./nickel.json" with { type: "json" };
import night_json from "./night.json" with { type: "json" };
import nightmare_json from "./nightmare.json" with { type: "json" };
import nil_json from "./nil.json" with { type: "json" };
import nimble_json from "./nimble.json" with { type: "json" };
import nine_json from "./nine.json" with { type: "json" };
import nineteen_json from "./nineteen.json" with { type: "json" };
import ninety_json from "./ninety.json" with { type: "json" };

export const dir_ni: Record<string, ICard> = {
  "nice": nice_json as unknown as ICard,
  "nicely": nicely_json as unknown as ICard,
  "niche": niche_json as unknown as ICard,
  "nickel": nickel_json as unknown as ICard,
  "night": night_json as unknown as ICard,
  "nightmare": nightmare_json as unknown as ICard,
  "nil": nil_json as unknown as ICard,
  "nimble": nimble_json as unknown as ICard,
  "nine": nine_json as unknown as ICard,
  "nineteen": nineteen_json as unknown as ICard,
  "ninety": ninety_json as unknown as ICard,
};
