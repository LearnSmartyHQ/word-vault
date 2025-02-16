import { ICard } from "../../../types/i-card.js";

import eye_json from "./eye.json" with { type: "json" };

export const dir_ey: Record<string, ICard> = {
  "eye": eye_json as unknown as ICard,
};
