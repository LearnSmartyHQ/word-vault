import { ICard } from "../../../types/i-card.js";

import ill_json from "./ill.json" with { type: "json" };
import illegal_json from "./illegal.json" with { type: "json" };
import illness_json from "./illness.json" with { type: "json" };
import illusion_json from "./illusion.json" with { type: "json" };
import illustrate_json from "./illustrate.json" with { type: "json" };
import illustration_json from "./illustration.json" with { type: "json" };

export const dir_il: Record<string, ICard> = {
  "ill": ill_json as unknown as ICard,
  "illegal": illegal_json as unknown as ICard,
  "illness": illness_json as unknown as ICard,
  "illusion": illusion_json as unknown as ICard,
  "illustrate": illustrate_json as unknown as ICard,
  "illustration": illustration_json as unknown as ICard,
};
