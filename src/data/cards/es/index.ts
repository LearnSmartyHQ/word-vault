import { ICard } from "../../../types/i-card.js";

import escalate_json from "./escalate.json" with { type: "json" };
import escape_json from "./escape.json" with { type: "json" };
import especial_json from "./especial.json" with { type: "json" };
import especially_json from "./especially.json" with { type: "json" };
import essay_json from "./essay.json" with { type: "json" };
import essence_json from "./essence.json" with { type: "json" };
import essential_json from "./essential.json" with { type: "json" };
import essentially_json from "./essentially.json" with { type: "json" };
import establish_json from "./establish.json" with { type: "json" };
import establishment_json from "./establishment.json" with { type: "json" };
import estate_json from "./estate.json" with { type: "json" };
import estimate_json from "./estimate.json" with { type: "json" };

export const dir_es: Record<string, ICard> = {
  "escalate": escalate_json as unknown as ICard,
  "escape": escape_json as unknown as ICard,
  "especial": especial_json as unknown as ICard,
  "especially": especially_json as unknown as ICard,
  "essay": essay_json as unknown as ICard,
  "essence": essence_json as unknown as ICard,
  "essential": essential_json as unknown as ICard,
  "essentially": essentially_json as unknown as ICard,
  "establish": establish_json as unknown as ICard,
  "establishment": establishment_json as unknown as ICard,
  "estate": estate_json as unknown as ICard,
  "estimate": estimate_json as unknown as ICard,
};
