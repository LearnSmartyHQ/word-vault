import { ICard } from "../../../types/i-card.js";

import effect_json from "./effect.json" with { type: "json" };
import effective_json from "./effective.json" with { type: "json" };
import effectively_json from "./effectively.json" with { type: "json" };
import effectiveness_json from "./effectiveness.json" with { type: "json" };
import efficiency_json from "./efficiency.json" with { type: "json" };
import efficient_json from "./efficient.json" with { type: "json" };
import efficiently_json from "./efficiently.json" with { type: "json" };
import effort_json from "./effort.json" with { type: "json" };

export const dir_ef: Record<string, ICard> = {
  "effect": effect_json as unknown as ICard,
  "effective": effective_json as unknown as ICard,
  "effectively": effectively_json as unknown as ICard,
  "effectiveness": effectiveness_json as unknown as ICard,
  "efficiency": efficiency_json as unknown as ICard,
  "efficient": efficient_json as unknown as ICard,
  "efficiently": efficiently_json as unknown as ICard,
  "effort": effort_json as unknown as ICard,
};
