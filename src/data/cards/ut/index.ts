import { ICard } from "../../../types/i-card.js";

import utensil_json from "./utensil.json" with { type: "json" };
import utility_json from "./utility.json" with { type: "json" };
import utilize_json from "./utilize.json" with { type: "json" };
import utter_json from "./utter.json" with { type: "json" };
import utterly_json from "./utterly.json" with { type: "json" };

export const dir_ut: Record<string, ICard> = {
  "utensil": utensil_json as unknown as ICard,
  "utility": utility_json as unknown as ICard,
  "utilize": utilize_json as unknown as ICard,
  "utter": utter_json as unknown as ICard,
  "utterly": utterly_json as unknown as ICard,
};
