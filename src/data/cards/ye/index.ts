import { ICard } from "../../../types/i-card.js";

import yeah_json from "./yeah.json" with { type: "json" };
import year_json from "./year.json" with { type: "json" };
import yell_json from "./yell.json" with { type: "json" };
import yellow_json from "./yellow.json" with { type: "json" };
import yep_json from "./yep.json" with { type: "json" };
import yes_json from "./yes.json" with { type: "json" };
import yesterday_json from "./yesterday.json" with { type: "json" };
import yet_json from "./yet.json" with { type: "json" };

export const dir_ye: Record<string, ICard> = {
  "yeah": yeah_json as unknown as ICard,
  "year": year_json as unknown as ICard,
  "yell": yell_json as unknown as ICard,
  "yellow": yellow_json as unknown as ICard,
  "yep": yep_json as unknown as ICard,
  "yes": yes_json as unknown as ICard,
  "yesterday": yesterday_json as unknown as ICard,
  "yet": yet_json as unknown as ICard,
};
