import { ICard } from "../../../types/i-card.js";

import equal_json from "./equal.json" with { type: "json" };
import equality_json from "./equality.json" with { type: "json" };
import equally_json from "./equally.json" with { type: "json" };
import equation_json from "./equation.json" with { type: "json" };
import equip_json from "./equip.json" with { type: "json" };
import equipment_json from "./equipment.json" with { type: "json" };
import equivalent_json from "./equivalent.json" with { type: "json" };

export const dir_eq: Record<string, ICard> = {
  "equal": equal_json as unknown as ICard,
  "equality": equality_json as unknown as ICard,
  "equally": equally_json as unknown as ICard,
  "equation": equation_json as unknown as ICard,
  "equip": equip_json as unknown as ICard,
  "equipment": equipment_json as unknown as ICard,
  "equivalent": equivalent_json as unknown as ICard,
};
