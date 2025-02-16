import { ICard } from "../../../types/i-card.js";

import lyric_json from "./lyric.json" with { type: "json" };

export const dir_ly: Record<string, ICard> = {
  "lyric": lyric_json as unknown as ICard,
};
