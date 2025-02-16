import { ICard } from "../../../types/i-card.js";

import echo_json from "./echo.json" with { type: "json" };
import ecological_json from "./ecological.json" with { type: "json" };
import economic_json from "./economic.json" with { type: "json" };
import economical_json from "./economical.json" with { type: "json" };
import economics_json from "./economics.json" with { type: "json" };
import economist_json from "./economist.json" with { type: "json" };
import economy_json from "./economy.json" with { type: "json" };

export const dir_ec: Record<string, ICard> = {
  "echo": echo_json as unknown as ICard,
  "ecological": ecological_json as unknown as ICard,
  "economic": economic_json as unknown as ICard,
  "economical": economical_json as unknown as ICard,
  "economics": economics_json as unknown as ICard,
  "economist": economist_json as unknown as ICard,
  "economy": economy_json as unknown as ICard,
};
