import { ICard } from "../../../types/i-card.js";

import dwindle_json from "./dwindle.json" with { type: "json" };

export const dir_dw: Record<string, ICard> = {
  "dwindle": dwindle_json as unknown as ICard,
};
