import { ICard } from "../../../types/i-card.js";

import jealous_json from "./jealous.json" with { type: "json" };
import jeans_json from "./jeans.json" with { type: "json" };
import jeopardize_json from "./jeopardize.json" with { type: "json" };
import jest_json from "./jest.json" with { type: "json" };
import jesus_json from "./jesus.json" with { type: "json" };
import jet_json from "./jet.json" with { type: "json" };
import jewellery_json from "./jewellery.json" with { type: "json" };
import jewelry_json from "./jewelry.json" with { type: "json" };

export const dir_je: Record<string, ICard> = {
  "jealous": jealous_json as unknown as ICard,
  "jeans": jeans_json as unknown as ICard,
  "jeopardize": jeopardize_json as unknown as ICard,
  "jest": jest_json as unknown as ICard,
  "jesus": jesus_json as unknown as ICard,
  "jet": jet_json as unknown as ICard,
  "jewellery": jewellery_json as unknown as ICard,
  "jewelry": jewelry_json as unknown as ICard,
};
