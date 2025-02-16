import { ICard } from "../../../types/i-card.js";

import nuclear_json from "./nuclear.json" with { type: "json" };
import nuisance_json from "./nuisance.json" with { type: "json" };
import numb_json from "./numb.json" with { type: "json" };
import number_json from "./number.json" with { type: "json" };
import numerous_json from "./numerous.json" with { type: "json" };
import nurse_json from "./nurse.json" with { type: "json" };
import nursery_json from "./nursery.json" with { type: "json" };
import nursing_json from "./nursing.json" with { type: "json" };
import nut_json from "./nut.json" with { type: "json" };
import nutrition_json from "./nutrition.json" with { type: "json" };

export const dir_nu: Record<string, ICard> = {
  "nuclear": nuclear_json as unknown as ICard,
  "nuisance": nuisance_json as unknown as ICard,
  "numb": numb_json as unknown as ICard,
  "number": number_json as unknown as ICard,
  "numerous": numerous_json as unknown as ICard,
  "nurse": nurse_json as unknown as ICard,
  "nursery": nursery_json as unknown as ICard,
  "nursing": nursing_json as unknown as ICard,
  "nut": nut_json as unknown as ICard,
  "nutrition": nutrition_json as unknown as ICard,
};
