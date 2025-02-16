import { ICard } from "../../../types/i-card.js";

import cigarette_json from "./cigarette.json" with { type: "json" };
import cinema_json from "./cinema.json" with { type: "json" };
import circle_json from "./circle.json" with { type: "json" };
import circuit_json from "./circuit.json" with { type: "json" };
import circulate_json from "./circulate.json" with { type: "json" };
import circulation_json from "./circulation.json" with { type: "json" };
import circumstance_json from "./circumstance.json" with { type: "json" };
import cite_json from "./cite.json" with { type: "json" };
import citizen_json from "./citizen.json" with { type: "json" };
import citizenship_json from "./citizenship.json" with { type: "json" };
import city_json from "./city.json" with { type: "json" };
import civic_json from "./civic.json" with { type: "json" };
import civil_json from "./civil.json" with { type: "json" };
import civilian_json from "./civilian.json" with { type: "json" };
import civilization_json from "./civilization.json" with { type: "json" };

export const dir_ci: Record<string, ICard> = {
  "cigarette": cigarette_json as unknown as ICard,
  "cinema": cinema_json as unknown as ICard,
  "circle": circle_json as unknown as ICard,
  "circuit": circuit_json as unknown as ICard,
  "circulate": circulate_json as unknown as ICard,
  "circulation": circulation_json as unknown as ICard,
  "circumstance": circumstance_json as unknown as ICard,
  "cite": cite_json as unknown as ICard,
  "citizen": citizen_json as unknown as ICard,
  "citizenship": citizenship_json as unknown as ICard,
  "city": city_json as unknown as ICard,
  "civic": civic_json as unknown as ICard,
  "civil": civil_json as unknown as ICard,
  "civilian": civilian_json as unknown as ICard,
  "civilization": civilization_json as unknown as ICard,
};
