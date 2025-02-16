import { ICard } from "../../../types/i-card.js";

import ok_json from "./ok.json" with { type: "json" };

export const dir_ok: Record<string, ICard> = {
  "ok": ok_json as unknown as ICard,
};
