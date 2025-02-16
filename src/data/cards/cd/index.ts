import { ICard } from "../../../types/i-card.js";

import cd_json from "./cd.json" with { type: "json" };

export const dir_cd: Record<string, ICard> = {
  "cd": cd_json as unknown as ICard,
};
