import { ICard } from "../../../types/i-card.js";

import symbol_json from "./symbol.json" with { type: "json" };
import symbolic_json from "./symbolic.json" with { type: "json" };
import sympathetic_json from "./sympathetic.json" with { type: "json" };
import sympathy_json from "./sympathy.json" with { type: "json" };
import symptom_json from "./symptom.json" with { type: "json" };
import synchronize_json from "./synchronize.json" with { type: "json" };
import syndrome_json from "./syndrome.json" with { type: "json" };
import synthesis_json from "./synthesis.json" with { type: "json" };
import system_json from "./system.json" with { type: "json" };
import systematic_json from "./systematic.json" with { type: "json" };

export const dir_sy: Record<string, ICard> = {
  "symbol": symbol_json as unknown as ICard,
  "symbolic": symbolic_json as unknown as ICard,
  "sympathetic": sympathetic_json as unknown as ICard,
  "sympathy": sympathy_json as unknown as ICard,
  "symptom": symptom_json as unknown as ICard,
  "synchronize": synchronize_json as unknown as ICard,
  "syndrome": syndrome_json as unknown as ICard,
  "synthesis": synthesis_json as unknown as ICard,
  "system": system_json as unknown as ICard,
  "systematic": systematic_json as unknown as ICard,
};
