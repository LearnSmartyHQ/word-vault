import { ICard } from "../../../types/i-card.js";

import umbrella_json from "./umbrella.json" with { type: "json" };

export const dir_um: Record<string, ICard> = {
  "umbrella": umbrella_json as unknown as ICard,
};
