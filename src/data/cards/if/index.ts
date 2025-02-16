import { ICard } from "../../../types/i-card.js";

import if_json from "./if.json" with { type: "json" };

export const dir_if: Record<string, ICard> = {
  "if": if_json as unknown as ICard,
};
