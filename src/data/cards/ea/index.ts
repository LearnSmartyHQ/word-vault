import { ICard } from "../../../types/i-card.js";

import each_other_json from "./each-other.json" with { type: "json" };
import each_json from "./each.json" with { type: "json" };
import eager_json from "./eager.json" with { type: "json" };
import ear_json from "./ear.json" with { type: "json" };
import early_json from "./early.json" with { type: "json" };
import earn_json from "./earn.json" with { type: "json" };
import earnings_json from "./earnings.json" with { type: "json" };
import earth_json from "./earth.json" with { type: "json" };
import earthquake_json from "./earthquake.json" with { type: "json" };
import ease_json from "./ease.json" with { type: "json" };
import easily_json from "./easily.json" with { type: "json" };
import east_json from "./east.json" with { type: "json" };
import eastern_json from "./eastern.json" with { type: "json" };
import easy_json from "./easy.json" with { type: "json" };
import eat_json from "./eat.json" with { type: "json" };

export const dir_ea: Record<string, ICard> = {
  "each-other": each_other_json as unknown as ICard,
  "each": each_json as unknown as ICard,
  "eager": eager_json as unknown as ICard,
  "ear": ear_json as unknown as ICard,
  "early": early_json as unknown as ICard,
  "earn": earn_json as unknown as ICard,
  "earnings": earnings_json as unknown as ICard,
  "earth": earth_json as unknown as ICard,
  "earthquake": earthquake_json as unknown as ICard,
  "ease": ease_json as unknown as ICard,
  "easily": easily_json as unknown as ICard,
  "east": east_json as unknown as ICard,
  "eastern": eastern_json as unknown as ICard,
  "easy": easy_json as unknown as ICard,
  "eat": eat_json as unknown as ICard,
};
